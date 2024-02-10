import { isSidebarOpen } from "@/atoms/sidebar";
import { useStore } from "@nanostores/react";
import { useEffect, useState, type PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

// make sure this matches tailwindcss's sm breakpoint
const MOBILE_QUERY = `(min-width: 640px)`;

const MobileSidebarContainer = ({ children }: PropsWithChildren) => {
  const $isSidebarOpen = useStore(isSidebarOpen);
  const [isMobile, setIsMobile] = useState(!$isSidebarOpen);

  const handleResize = (event: MediaQueryListEvent) => {
    setIsMobile(!event.matches);
    isSidebarOpen.set(event.matches);
  };

  useEffect(() => {
    setIsMobile(!window.matchMedia(MOBILE_QUERY).matches);
    isSidebarOpen.set(window.matchMedia(MOBILE_QUERY).matches);

    window.matchMedia(MOBILE_QUERY).addEventListener("change", handleResize);

    return () => {
      window
        .matchMedia(MOBILE_QUERY)
        .removeEventListener("change", handleResize);
    };
  }, []);

  return (
    $isSidebarOpen &&
    isMobile && <Sidebar className="absolute w-full">{children}</Sidebar>
  );
};

export default MobileSidebarContainer;

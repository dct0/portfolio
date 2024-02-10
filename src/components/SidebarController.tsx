import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, type PropsWithChildren, useEffect } from "react";
import { Toggle } from "./ui/toggle";
import Sidebar from "./Sidebar";
import { screens } from "tailwindcss/defaultTheme";

const MOBILE_QUERY = `(min-width: ${screens.sm})`;

const SidebarController = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(MOBILE_QUERY).matches
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = (event: MediaQueryListEvent) => {
    setIsMobile(!event.matches);
    setIsSidebarOpen(event.matches);
  };

  useEffect(() => {
    setIsMobile(!window.matchMedia(MOBILE_QUERY).matches);
    setIsSidebarOpen(window.matchMedia(MOBILE_QUERY).matches);

    window.matchMedia(MOBILE_QUERY).addEventListener("change", handleResize);

    return () => {
      window
        .matchMedia(MOBILE_QUERY)
        .removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <Toggle
        className={cn(
          "absolute left-1 top-1 z-10 rounded p-1 hover:bg-border sm:hidden"
        )}
        aria-label="Toggle Sidebar"
        onClick={toggleSidebar}
      >
        <Menu />
      </Toggle>
      {isSidebarOpen && (
        <Sidebar className={isMobile ? "absolute w-full" : "hidden sm:block"}>
          {children}
        </Sidebar>
      )}
    </>
  );
};

export default SidebarController;

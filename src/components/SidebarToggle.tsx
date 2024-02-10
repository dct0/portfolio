import { isSidebarOpen } from "@/atoms/sidebar";
import { useStore } from "@nanostores/react";
import { Menu, X } from "lucide-react";
import { Toggle } from "./ui/toggle";

const SidebarToggle = () => {
  const $isSidebarOpen = useStore(isSidebarOpen);

  return (
    <Toggle
      className="absolute right-7 top-7 z-[1000] rounded p-2 hover:bg-border sm:hidden"
      aria-label="Toggle Sidebar"
      onClick={() => isSidebarOpen.set(!$isSidebarOpen)}
    >
      {$isSidebarOpen ? <X /> : <Menu />}
    </Toggle>
  );
};

export default SidebarToggle;

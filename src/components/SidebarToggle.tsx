import { isSidebarOpen } from "@/atoms/sidebar";
import { useStore } from "@nanostores/react";
import { Menu } from "lucide-react";
import { Toggle } from "./ui/toggle";

const SidebarToggle = () => {
  const $isSidebarOpen = useStore(isSidebarOpen);

  return (
    <Toggle
      className="absolute left-1 top-1 z-10 rounded p-1 hover:bg-border sm:hidden"
      aria-label="Toggle Sidebar"
      onClick={() => isSidebarOpen.set(!$isSidebarOpen)}
    >
      <Menu />
    </Toggle>
  );
};

export default SidebarToggle;

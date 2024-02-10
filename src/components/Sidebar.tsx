import SidebarAvatar from "@/components/SidebarAvatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import type { ClassNameValue } from "tailwind-merge";

const Sidebar = ({
  className,
  children
}: PropsWithChildren<{ className?: ClassNameValue }>) => {
  return (
    <aside
      className={cn(
        "z-[5] h-screen flex-col bg-primary-foreground p-8",
        className
      )}
      id="sidebar"
    >
      <header className="flex flex-col">
        <SidebarAvatar className="mb-3" />
        <b className="text-xl">Dylan To</b>
        <p className="text-sm text-muted-foreground">dylan.to@hotmail.com</p>
      </header>
      <Separator className="my-12" />
      <div className="flex h-full flex-col justify-between">
        <nav className="flex flex-col gap-6 pl-3">{children}</nav>
        <footer>
          <Switch className="float-right" />
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;

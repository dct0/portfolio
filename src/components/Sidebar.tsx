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
        "relative z-[999] h-screen w-64 bg-primary-foreground p-8",
        className
      )}
      id="sidebar"
    >
      <header>
        <SidebarAvatar className="mb-3" />
        <b className="text-xl">Dylan To</b>
        <a
          className="flex items-center text-sm text-muted-foreground hover:underline"
          href="https://github.com/dct0"
        >
          @dct0
        </a>
      </header>
      <Separator className="my-12" />
      <nav className="flex flex-col gap-6 pl-3">{children}</nav>
      <footer className="absolute bottom-8 right-8">
        <Switch />
      </footer>
    </aside>
  );
};

export default Sidebar;

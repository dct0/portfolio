import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import { Menu } from "lucide-react";

const MobileNavigationMenu = ({ className }: { className?: ClassValue }) => {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="bg-transparent text-gray-100">
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 p-4">
              <li>
                <a className="text-gray-100 hover:underline" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-100 hover:underline" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-fuchsia-400 hover:underline"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MobileNavigationMenu;

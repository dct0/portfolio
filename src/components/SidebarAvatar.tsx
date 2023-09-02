import type { ClassNameValue } from "tailwind-merge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface SidebarAvatarProps {
  className?: ClassNameValue;
}

const SidebarAvatar = ({ className }: SidebarAvatarProps) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src="https://github.com/dct0.png" />
      <AvatarFallback>DT</AvatarFallback>
    </Avatar>
  );
};

export default SidebarAvatar;

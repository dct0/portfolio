import { cn, normalizeColor } from "@/lib/utils";
import getRelativeLuminance from "relative-luminance";
import { ReactSVG } from "react-svg";
import type { ClassNameValue } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import type { PropsWithChildren } from "react";

interface SkillPillProps {
  name: string;
  iconName?: string;
  color?: string;
  textColor?: string;
  class?: ClassNameValue;
}

const hexPattern = /^#?[a-f0-9]{3,8}$/i;

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
};

const getTextColor = (text: string) => {
  const color = normalizeColor(text);
  const luminance = hexPattern.test(text)
    ? getRelativeLuminance(hexToRgb(`#${color}`))
    : -1;

  if (luminance === -1) return "#f3f4f6"; // gray-100
  return luminance < 0.4 ? "#f3f4f6" /* gray-100 */ : "#111827" /* gray-900 */;
};

const SkillPill = ({
  name,
  iconName,
  color,
  textColor = getTextColor(color ?? ""),
  class: className,
  children
}: PropsWithChildren<SkillPillProps>) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <article
            className={cn(
              "flex items-center gap-2 rounded-full border bg-gray-800 px-4 py-2",
              className
            )}
            style={{ backgroundColor: color }}
          >
            <span
              className={"text-xl font-semibold"}
              style={{
                color: textColor
              }}
            >
              {name}
            </span>
            <ReactSVG
              className="h-6 w-6"
              style={{
                fill: textColor,
                color: textColor
              }}
              src={`/icons/${iconName}.svg`}
            />
          </article>
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillPill;

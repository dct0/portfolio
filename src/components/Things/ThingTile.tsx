import { rendererOptions } from "@/lib/RichTextRenderer";
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassNameValue } from "tailwind-merge";

import { cn, optimise } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { type Document } from "@contentful/rich-text-types";
import type { Asset, AssetFile } from "contentful";

export const thingTile = cva("item m-4 rounded-xl", {
  variants: {
    size: {
      sm: "w-[calc(25%-2rem)]",
      md: "w-[calc(50%-2rem)]",
      lg: "w-[calc(75%-2rem)]",
      full: "w-full"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});

export interface ThingTileProps extends VariantProps<typeof thingTile> {
  className?: ClassNameValue;
  slug: string;
  name: string;
  description: Document;
  image?: Asset;
  colour?: string;
  textColour?: string;
}

const ThingTile = ({
  className,
  size,
  name,
  description,
  image,
  colour = "#cbd5e1",
  textColour = "#000000"
}: ThingTileProps) => {
  const file = image?.fields.file as AssetFile | undefined;

  return (
    <article
      className={cn(thingTile({ size, className }))}
      style={{
        backgroundColor: colour
      }}
    >
      {file && (
        <img
          className="absolute -z-10 rounded-xl object-cover"
          src={optimise(file)}
          alt={name}
        />
      )}
      <div className="item-content p-4">
        <div style={{ color: textColour }}>
          <h3 className="mb-2 text-3xl font-semibold">{name}</h3>
          {documentToReactComponents(description, rendererOptions)}
        </div>
      </div>
    </article>
  );
};

export default ThingTile;

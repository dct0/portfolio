import { cva, type VariantProps } from "class-variance-authority";
import { type ClassNameValue } from "tailwind-merge";

import { cn } from "@/lib/utils";
import type { Asset } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

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
}

const ThingTile = ({
  className,
  size,
  name,
  description,
  image,
  colour = "#cbd5e1"
}: ThingTileProps) => {
  const imageFile = image?.fields.file;

  return (
    <article
      className={cn(thingTile({ size, className }))}
      style={{
        backgroundColor: colour
      }}
    >
      <div className="item-content p-4">
        {imageFile && (
          <img
            className="-z-10 rounded-xl object-cover"
            src={imageFile.url?.toString()}
            alt={name}
          />
        )}
        <div>
          <h3 className="mb-2 text-3xl font-semibold text-primary">{name}</h3>
          {documentToReactComponents(description)}
        </div>
      </div>
    </article>
  );
};

export default ThingTile;

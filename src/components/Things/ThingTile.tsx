import { rendererOptions } from "@/lib/RichTextRenderer";
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassNameValue } from "tailwind-merge";

import { cn, optimise } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { type Document } from "@contentful/rich-text-types";
import type { Asset, AssetFile } from "contentful";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
      <Dialog>
        <DialogTrigger asChild>
          <div className="item-content cursor-pointer">
            <div
              className="h-full w-full rounded-xl"
              style={{
                color: textColour
              }}
            >
              {file && (
                <img
                  className="object-fit rounded-xl"
                  alt={`Image for ${name}`}
                  src={optimise(file)}
                />
              )}
              <div
                className={cn("h-full w-full p-4 text-left", {
                  "absolute top-0": file
                })}
              >
                <h3 className="mb-2 text-3xl font-semibold">{name}</h3>
                {documentToReactComponents(description, rendererOptions)}
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="top-[100%] flex h-3/4 translate-y-[-100%] flex-col gap-0 space-y-0 rounded-xl p-0 sm:rounded-xl">
          <div className="relative flex flex-col rounded-t-xl">
            {file ? (
              <img
                className="object-fit rounded-t-xl"
                alt={`Image for ${name}`}
                src={optimise(file)}
              />
            ) : (
              <div
                className="rounded-t-xl p-6"
                style={{
                  color: textColour,
                  backgroundColor: colour
                }}
              >
                <h3 className="mb-2 text-3xl font-semibold">{name}</h3>
                {documentToReactComponents(description, rendererOptions)}
              </div>
            )}
            {file && (
              <div
                className="absolute p-6"
                style={{
                  color: textColour
                }}
              >
                <h3 className="mb-2 text-3xl font-semibold">{name}</h3>
                {documentToReactComponents(description, rendererOptions)}
              </div>
            )}
          </div>

          <div className="p-6">Made some stuff</div>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export default ThingTile;

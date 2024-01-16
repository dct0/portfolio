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
      sm: "w-[calc(25%-2rem)] h-[14rem]",
      md: "w-[calc(50%-2rem)] h-[24rem]",
      lg: "w-[calc(75%-2rem)] h-[34rem]",
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
  body: Document;
  image?: Asset;
  colour?: string;
  textColour?: string;
}

const ThingTile = ({
  className,
  size,
  name,
  description,
  body,
  image,
  colour = "#cbd5e1",
  textColour = "#000000"
}: ThingTileProps) => {
  const file = image?.fields.file as AssetFile | undefined;

  return (
    <article className={cn(thingTile({ size, className }))}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="item-content cursor-pointer">
            <div
              className="h-full rounded-xl p-4 text-left"
              style={{
                color: textColour,
                backgroundImage: file ? `url(${optimise(file)})` : "none",
                backgroundPosition: "50% 33%",
                backgroundSize: "cover",
                backgroundColor: colour
              }}
            >
              <h3 className="mb-2 text-3xl font-semibold">{name}</h3>
              {documentToReactComponents(description, rendererOptions)}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="top-[100%] flex h-2/3 translate-y-[-100%] flex-col gap-0 rounded-b-none rounded-t-xl p-0 focus-visible:outline-none sm:rounded-b-none sm:rounded-t-xl">
          {file ? (
            <img
              className="rounded-t-xl"
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

          <div className="overflow-y-auto p-6">
            {documentToReactComponents(body, rendererOptions)}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export default ThingTile;

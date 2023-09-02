import ThingGrid from "./ThingGrid";
import ThingTile, { type ThingTileProps } from "./ThingTile";

interface ThingsProps {
  items: ThingTileProps[];
}

const Things = ({ items }: ThingsProps) => {
  return (
    <>
      {items.length ? (
        <ThingGrid>
          {items.map((project, index) => (
            <ThingTile key={index} {...project} />
          ))}
        </ThingGrid>
      ) : (
        <p>No items found.</p>
      )}
    </>
  );
};

export default Things;

import ThingGrid from "./ThingGrid";
import ThingTile, { type ThingTileProps } from "./ThingTile";

interface ThingsProps {
  items: ThingTileProps[];
}

const Things = ({ items }: ThingsProps) => {
  return (
    <ThingGrid>
      {items.map((project, index) => (
        <ThingTile key={index} {...project} />
      ))}
    </ThingGrid>
  );
};

export default Things;

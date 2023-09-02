import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import Muuri from "muuri";

interface ThingGridProps {
  as?: string;
}

const ThingGrid = ({
  as = "div",
  children
}: PropsWithChildren<ThingGridProps>) => {
  const Component = as as keyof JSX.IntrinsicElements;

  const [grid, setGrid] = useState<Muuri>();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function spawnGrid() {
      if (grid || !gridRef.current) return;

      setGrid(
        new Muuri(gridRef.current, {
          items: ".item",
          layout: {
            fillGaps: true
          },
          dragEnabled: true
        })
      );
    }

    void spawnGrid();
  }, [grid]);

  return (
    <Component className="-m-4">
      <div ref={gridRef} className="thing-grid">
        {children}
      </div>
    </Component>
  );
};

export default ThingGrid;

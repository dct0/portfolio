import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import Muuri from "muuri";

const ThingGrid = ({ children }: PropsWithChildren) => {
  const [grid, setGrid] = useState<Muuri>();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (grid || !gridRef.current) return;

    setGrid(
      new Muuri(gridRef.current, {
        items: ".item",
        layout: {
          fillGaps: true
        },
        dragEnabled: false
      })
    );
  }, [grid]);

  return (
    <section className="-m-4">
      <div ref={gridRef} className="thing-grid">
        {children}
      </div>
    </section>
  );
};

export default ThingGrid;

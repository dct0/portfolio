import { useState, type PropsWithChildren } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  const [current, setCurrent] = useState(0);

  return (
    <div onClick={() => setCurrent(current + 1)}>
      <p>{current}</p>
      <div>{children}</div>
    </div>
  );
};

export default Carousel;

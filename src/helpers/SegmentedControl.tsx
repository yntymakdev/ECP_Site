import { useRef, useState, useEffect } from "react";

interface Segment {
  label: string;
  value: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface SegmentedControlProps {
  name: string;
  segments: Segment[];
  callback: (value: string, index: number) => void;
  defaultIndex?: number;
  controlRef: React.RefObject<HTMLDivElement | null>;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef<boolean>(false);

  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    if (!activeSegmentRef.current || !controlRef.current) return;

    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments]);

  const onInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="segmented-wrapper">
      <div ref={controlRef} className={`controls ${componentReady.current ? "ready" : ""}`}>
        {segments?.map((item, i) => (
          <div key={item.value} ref={item.ref} className={`segment ${i === activeIndex ? "active" : ""}`}>
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentedControl;

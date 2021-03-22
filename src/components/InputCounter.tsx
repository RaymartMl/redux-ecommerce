interface InputCounterProps {
  className?: string;
  noSubmit?: boolean;
  value: string | number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function InputCounter({
  className,
  noSubmit,
  value,
  onDecrement,
  onIncrement,
}: InputCounterProps) {
  return (
    <div
      className={`inline-flex max-w-xs overflow-hidden bg-offWhite select-none ${className}`}
    >
      <button
        type={noSubmit ? "button" : undefined}
        className="p-2 px-4 text-lg font-bold focus:outline-none"
        onClick={onDecrement}
      >
        -
      </button>

      <div className="flex-1 inline-block  p-2 font-bold text-center outline-none text-primary bg-offWhite">
        {value}
      </div>

      <button
        type={noSubmit ? "button" : undefined}
        className="p-2 px-4 text-lg font-bold outline-none focus:outline-none"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}

import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ColumnHeaderProps {
  column: { id: string; originalLabel?: string };
  selectedValue: string;
  onChange: (value: string) => void;
  style?: string;
}

export const ColumnHeader = ({
  column,
  selectedValue,
  style,
  onChange,
}: ColumnHeaderProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const staticOptions = ["Option 1", "Option 2", "Option 3"];
  const originalLabel = column?.originalLabel ?? selectedValue;
  const allOptions = Array.from(new Set([originalLabel, ...staticOptions]));

  return (
    <div className={`relative bg-[#eeeeee] text-[#757575] ${style}`}>
      <select
        ref={selectRef}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none text-sm pr-5 py-1.5 w-full bg-transparent cursor-pointer"
      >
        {allOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <IoIosArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer" />
    </div>
  );
};

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
  const staticOptions = ["Option 1", "Option 2", "Option 3"];
  const originalLabel = column?.originalLabel ?? selectedValue;
  const allOptions = Array.from(new Set([originalLabel, ...staticOptions]));

  return (
    <div className={`relative bg-[#eeeeee] p-1  text-[#757575] ${style}`}>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none text-sm pr-5"
      >
        {allOptions.map((opt) => (
          <option key={opt} value={opt} className="appearance-none">
            {opt}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="absolute  right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
    </div>
  );
};

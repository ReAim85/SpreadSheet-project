import { useState, useEffect, useRef } from "react";
import type { EditableCellProps } from "./interfaces";

const EditableCell = <Tdata,>({
  value: initialValue = "",
  row,
  column,
  table,
}: EditableCellProps<Tdata>) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  return (
    <div className="relative h-8 border-r border-b border-[#F6F6F6] p-0 m-0">
      <input
        type={column.id == "I" ? "number" : "text"}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="w-full h-full px-2 text-sm border-none outline-none bg-transparent focus:ring-2 focus:shadow-[2px_0px_17px_-6px_#4B6A4F] focus:ring-[#6C8B70]"
      />
    </div>
  );
};

export default EditableCell;

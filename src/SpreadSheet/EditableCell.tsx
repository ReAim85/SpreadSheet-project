import { useState, useEffect, useRef } from "react";

const EditableCell = ({
  value: initialValue = "",
  row,
  column,
  table,
}: any) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  return (
    <div className="relative h-8 border-r border-b border-gray-200 p-0 m-0">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="w-full h-full px-2 text-sm border-none outline-none bg-transparent focus:ring-2 focus:ring-[#6C8B70]"
      />
    </div>
  );
};

export default EditableCell;

export const ColumnHeader = ({ column }: any) => {
  return (
    <div className="h-8 bg-gray-100 border-r border-b border-gray-300 flex items-center justify-center font-medium text-sm text-gray-700">
      {column.id}
    </div>
  );
};

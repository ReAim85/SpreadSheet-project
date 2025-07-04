export const RowHeader = ({ rowIndex }: { rowIndex: number }) => {
  return (
    <div className="w-12 h-8 bg-gray-100 border-r border-b border-gray-300 flex items-center justify-center text-sm text-gray-600 font-medium">
      {rowIndex + 1}
    </div>
  );
};

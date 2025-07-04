import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { generateEmptyData } from "./generateEmptyData";
import type { CellData, Position } from "./interfaces";
import EditableCell from "./EditableCell";
import { ColumnHeader } from "./ColumnHeader";
import { RowHeader } from "./RowHeader";

const ExcelSpreadsheet = () => {
  const [data, setData] = useState(() => generateEmptyData(30, 9));
  const [selectedCell, setSelectedCell] = useState<Position>({
    rowIndex: 0,
    columnId: "A",
  });

  const columnHelper = createColumnHelper<CellData>();
  const columns = useMemo<ColumnDef<CellData, any>[]>(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const colId = String.fromCharCode(65 + i);
        return columnHelper.accessor(colId, {
          id: colId,
          header: () => <ColumnHeader column={{ id: colId }} />,
          cell: (info) => (
            <EditableCell
              value={info.getValue()}
              row={info.row}
              column={info.column}
              table={info.table}
              onClick={() =>
                setSelectedCell({ rowIndex: info.row.index, columnId: colId })
              }
            />
          ),
          size: 150,
        });
      }),
    [selectedCell]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: any) => {
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...row, [columnId]: value } : row
          )
        );
      },
    },
  });

  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <div className="inline-block min-w-full">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="w-12 h-8 bg-gray-100 border-r border-b border-white">
                #
              </th>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <th
                  key={header.id}
                  className="bg-[EEEEEE] border-r border-b border-white"
                  style={{ width: header.getSize() }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                <td className="p-0">
                  <RowHeader rowIndex={row.index} />
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-0"
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExcelSpreadsheet;

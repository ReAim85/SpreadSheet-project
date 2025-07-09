import React, { useState, useMemo } from "react";
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
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TbUserFilled, TbWorld, TbMoodSmileFilled } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa6";

const ExcelSpreadsheet = () => {
  const [data, setData] = useState(() => generateEmptyData(29, 8));
  const [selectedCell, setSelectedCell] = useState<Position>({
    rowIndex: 0,
    columnId: "A",
  });

  console.log("This is inside the SpreadSheet.tsx file line 26", selectedCell);

  const columnHelper = createColumnHelper<CellData>();
  interface ColumnItem {
    id: keyof CellData;
    label: string;
    icon?: React.JSX.Element;
    dropdown?: boolean;
    headerClass?: string;
  }

  const columnConfig: ColumnItem[] = useMemo(
    () =>
      [
        {
          id: "A",
          label: "Job Request",
          dropdown: true,
          icon: <FaBriefcase className="text-[#AFAFAF] ml-1" />,
          headerClass: "font-semibold text-start pl-6",
        },
        {
          id: "B",
          label: "Submitted",
          dropdown: true,
          icon: <BsFillCalendar3WeekFill className="text-[#AFAFAF] ml-1" />,
          headerClass: "font-semibold text-start pl-6",
        },
        {
          id: "C",
          label: "Status",
          dropdown: true,
          icon: <IoIosArrowDropdownCircle className="text-[#AFAFAF] ml-1" />,
          headerClass: "font-semibold text-start pl-6",
        },
        {
          id: "D",
          label: "Submitter",
          dropdown: true,
          icon: <TbUserFilled className="text-[#AFAFAF] ml-1" />,
          headerClass: "font-semibold text-start pl-6",
        },
        {
          id: "E",
          label: "URL",
          dropdown: true,
          icon: <TbWorld className="text-[#AFAFAF] ml-1" />,
          headerClass: "font-semibold text-start pl-6",
        },
        {
          id: "F",
          label: "Assigned",
          icon: <TbMoodSmileFilled />,
          headerClass: "bg-[#E8F0E9] p-1.5 text-[#666C66] font-semibold",
        },
        {
          id: "G",
          label: "Priority",
          headerClass: "bg-[#EAE3FC] p-1.5 text-[#655C80] font-semibold",
        },
        {
          id: "H",
          label: "Due Date",
          headerClass: "bg-[#EAE3FC] p-1.5 text-[#655C80] font-semibold",
        },
        {
          id: "I",
          label: "Est. Value",
          headerClass: "bg-[#FFE9E0] p-1.5 text-[#8C6C62] font-semibold",
        },
      ] as const,
    []
  );

  const [columnHeaderSelections, setColumnHeaderSelections] = useState(() =>
    columnConfig.reduce((acc, col) => {
      if (col.dropdown) acc[col.id] = col.label;
      return acc;
    }, {} as Record<string, string>)
  );

  const columns = useMemo<ColumnDef<CellData, string>[]>(
    () =>
      columnConfig.map(({ id, label, icon, dropdown, headerClass }) =>
        columnHelper.accessor(id as string, {
          id: id as string,
          header: () =>
            dropdown ? (
              <div className="-mt-3.5">
                <span className="flex relative top-6 w-10 -pr-10 z-1">
                  {icon}
                </span>
                <ColumnHeader
                  column={{ id: id as string, originalLabel: label }}
                  selectedValue={columnHeaderSelections[id]}
                  style={headerClass}
                  onChange={(value) =>
                    setColumnHeaderSelections((prev) => ({
                      ...prev,
                      [id]: value,
                    }))
                  }
                />
              </div>
            ) : (
              <div
                className={`flex items-center gap-1 font-normal text-sm ${headerClass}`}
              >
                {icon}
                {label}
              </div>
            ),
          cell: (info) => (
            <EditableCell
              value={info.getValue()}
              row={info.row}
              column={info.column}
              table={info.table}
              onClick={() =>
                setSelectedCell({
                  rowIndex: info.row.index,
                  columnId: id as string,
                })
              }
            />
          ),
          size: 150,
        })
      ),
    [columnHeaderSelections, columnConfig, columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...row, [columnId]: value } : row
          )
        );
      },
    },
  });

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
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

import type { CellContext, Table } from "@tanstack/react-table";

export type CellData = {
  id: string;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
  F?: string;
  G?: string;
  H?: string;
  I?: string;
  [key: string]: string | undefined;
};

export interface EditableCellProps<TData> {
  value: string;
  row: CellContext<TData, string>["row"];
  column: CellContext<TData, string>["column"];
  table: Table<TData>;
  onClick?: () => void;
}

export interface Position {
  rowIndex: number;
  columnId: string;
}

export interface SpreadsheetData {
  [key: string]: string | number;
}

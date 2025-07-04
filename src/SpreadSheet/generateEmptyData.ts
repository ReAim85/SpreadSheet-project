import type { CellData } from "./interfaces";

export const generateEmptyData = (rows: number, cols: number): CellData[] => {
  const data: CellData[] = [];
  for (let i = 0; i < rows; i++) {
    const row: CellData = { id: `row-${i}` };
    for (let j = 0; j < cols; j++) {
      const colId = String.fromCharCode(65 + j);
      row[colId] = "";
    }
    data.push(row);
  }
  return data;
};

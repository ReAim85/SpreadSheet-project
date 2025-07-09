import { SheetTabs } from "./SpreadSheet/SheetTabs";
import Spreadsheet from "./SpreadSheet/Spreadsheet";
import SpreadSheetHeaderFirst from "./TopHeader/first-header";
import SpreadsheetHeaderSecond from "./TopHeader/second-header";
import ThirdSpreadsheetHeader from "./TopHeader/third-header";
const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="sticky top-0">
          <SpreadSheetHeaderFirst />
          <SpreadsheetHeaderSecond />
          <ThirdSpreadsheetHeader />
        </div>
        <div className="flex-1 overflow-auto">
          <Spreadsheet />
        </div>
        <div className="sticky bottom-0">
          <SheetTabs />
        </div>
      </div>
    </>
  );
};

export default App;

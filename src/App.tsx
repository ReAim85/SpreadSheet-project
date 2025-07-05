import Spreadsheet from "./SpreadSheet/Spreadsheet";
import SpreadSheetHeaderFirst from "./TopHeader/first-header";
import SpreadsheetHeaderSecond from "./TopHeader/second-header";
const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <SpreadSheetHeaderFirst />
        <SpreadsheetHeaderSecond />
        <div className="flex-1 overflow-hiden">
          <Spreadsheet />
        </div>
      </div>
    </>
  );
};

export default App;

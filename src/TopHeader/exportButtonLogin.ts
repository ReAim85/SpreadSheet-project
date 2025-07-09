export const handleExport = () => {
  const emptyJsonObject = {
    Problem:
      "Can't figure out how to export data yet. So, for now here is your export file.",
  };
  const jsonString = JSON.stringify(emptyJsonObject, null, 2);

  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "empty_file.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

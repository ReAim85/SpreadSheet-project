# 🧮 Spreadsheet Project

A custom React-based spreadsheet interface built with TypeScript, Vite, Tailwind CSS, and `@tanstack/react-table`. Includes dropdown-enabled headers and keyboard-navigable cells.

## 🔧 Setup Instructions

Clone the repo:

```bash
git clone https://github.com/reaim85/SpreadSheet-project.git
cd SpreadSheet-project
```

## ⚖️ Trade-offs & Design Decisions

- `Dynamic vs. Fixed Columns`
  Originally built with auto-generated columns (A, B, C, ...), but replaced with a fixed config for more control over header content and icons.

- `No Backend`
  All data is in-memory (non-persistent). This keeps the app fast and lightweight.
- `Tailwind Utility Classes`
  Used for styling flexibility and responsiveness. Could be abstracted into reusable components for larger projects.

- `No State Persistence`
  Data will reset on refresh. LocalStorage or backend integration can be added later if needed.

interface SidebarProps {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Sidebar = ({ showSideBar, setShowSideBar }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[20vw] border-l bg-teal-100 rounded-l-2xl p-10 border pl-20 h-full z-40 transition-transform duration-300 ${
        showSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 mt-8 text-teal-900 font-bold text-xl border-l-4 border-teal-500">
        This Can be used as a Sidebar for Profile usage and User Settings
      </div>
      <button
        className="fixed right-10 top-3 font-bold text-teal-900 text-2xl cursor-pointer p-5"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        X
      </button>
    </div>
  );
};

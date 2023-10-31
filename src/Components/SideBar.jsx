const SideBar = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[30px] text-[#0048ad] font-bold">abc firm</div>
      <div className="flex flex-col">
        <button>Home</button>
        <button>All Files</button>
        <button>Saved</button>
        <button>Integrations</button>
        <button>Trash</button>
        <button>Settings</button>
        <button>Help And Support</button>
      </div>
    </div>
  );
};

export default SideBar;

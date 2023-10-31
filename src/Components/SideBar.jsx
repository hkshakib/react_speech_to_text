const SideBar = () => {
  return (
    <div className="flex flex-col basis-[100%] justify-center items-center">
      <div className="flex basis-[8%] text-[30px] text-[#0048ad] font-bold mb-4 mt-4">
        abc firm
      </div>
      <div className="flex h-[600px] flex-col border">
        <button className="SideBarButton">Home</button>
        <button className="SideBarButton">All Files</button>
        <button className="SideBarButton">Saved</button>
        <button className="SideBarButton">Integrations</button>
        <button className="SideBarButton">Trash</button>
        <button className="SideBarButton">Settings</button>
        <button className="SideBarButton">Help And Support</button>
      </div>
      <div className="flex flex-1">
        <div className="h-[200px] w-[300px] bg-blue-500 mb-4 mt-4 rounded-md">
          Hello
        </div>
      </div>
    </div>
  );
};

export default SideBar;

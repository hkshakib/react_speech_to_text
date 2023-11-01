import Main from "./Components/Main";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="flex h-[100%] w-[100%] p-4 bg-[#f9fafb] gap-10">
      <div className="flex basis-[20%] justify-center">
        <SideBar />
      </div>
      <div className="flex basis-[80%]">
        <Main />
      </div>
    </div>
  );
}

export default App;

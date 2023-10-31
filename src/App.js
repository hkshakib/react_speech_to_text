import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="flex h-[100%] w-[100%] p-4 bg-[#f9fafb]">
      <div className="flex basis-[20%] justify-center">
        <SideBar />
      </div>
      <div className="flex flex-1">Main Contetn</div>
    </div>
  );
}

export default App;

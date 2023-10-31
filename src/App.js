import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="flex h-[100%] w-[100%] p-4">
      <div className="flex basis-[20%] justify-center border border-red-500">
        <SideBar />
      </div>
      <div className="flex flex-1 border border-blue-600">Main Contetn</div>
    </div>
  );
}

export default App;

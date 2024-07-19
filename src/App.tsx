import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-gray-700 text-white text-center">
        <Routes>
          <Route path="/" Component={Todo} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

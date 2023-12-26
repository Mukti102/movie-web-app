import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch/:id/movie/:title" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

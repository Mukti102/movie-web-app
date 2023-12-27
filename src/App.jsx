import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Main from "./organisms/Main";
import MainHome from "./atoms/Main/MainHome";
import MainSearch from "./atoms/Main/MainSearch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Main />}>
            <Route index element={<MainHome />} />
            <Route path="search/:movie" element={<MainSearch />} />
          </Route>
        </Route>
        <Route path="watch/:id/movie/:title" element={<Preview />} />
        <Route
          path="search/:movie/watch/:id/movie/:title"
          element={<Preview />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

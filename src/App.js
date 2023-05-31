import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLayout from "./components/NavbarLayout";
import ArticleResultsList from "./components/ArticleResultsList";
import ReadArticle from "./components/ReadArticle";
import Homepage from "./components/Homepage";

function Navigation() {
  return (
    <div>
      <NavbarLayout/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="search" element={<ArticleResultsList/>}/>
        <Route path="read" element={<ReadArticle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
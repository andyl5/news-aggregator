import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLayout from "./components/NavbarLayout";
import ArticleResultsList from "./components/ArticleResultsList";
import ScrapeArticle from "./components/ScrapeArticle";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<NavbarLayout/>}>
//       {/* <Route path="search" element={<ArticleResultsList/>}/> */}
//       <Route path="/results" element={<ArticleResultsList />} />
//     </Route>
//   )
// )

function Navigation() {
  return (
    <div>
      <NavbarLayout/>
    </div>
  );
}

function App() {
  return (
    // <RouterProvider router={router}/>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="search" element={<ArticleResultsList/>}/>

        {/* <Route path="read?url=:_url" element={<ScrapeArticle/>}/> */}
        <Route path="read" element={<ScrapeArticle/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;

// simplifying react router
// keep the search in the navbar, but instead of setting data, it puts the query in the url. react redirect
// search?q=apple

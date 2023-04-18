import 'bootstrap/dist/css/bootstrap.min.css';


import NavbarLayout from "./components/NavbarLayout";
import ApiTest from './components/ApiTest';
import ArticleScrapeTest from '../ArticleScrapeTest';

function App() {
  return (
    <div>
      <NavbarLayout/>
      <ApiTest/>
      {/* <ArticleScrapeTest/> */}
    </div>
  )
}

export default App;

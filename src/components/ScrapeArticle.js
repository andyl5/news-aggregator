import { useLocation } from 'react-router-dom';

function ScrapeArticle() {
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const url = searchParams.get('url');
  console.log(url);

  return (
    <div>
      <h1>url</h1>
      <a href={url}>{url}</a>
    </div>
  );
}

export default ScrapeArticle;

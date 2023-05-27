import { useEffect, useState } from "react";

function ScrapeArticle() {

  const [articleContent, setArticleContent] = useState(null)
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setArticleContent(data.content))
  }, []);
  return (
    <div>
      {/* <p>{articleContent}</p> */}
    </div>
  )
}
export default ScrapeArticle
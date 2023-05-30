import { useEffect, useState } from "react"

function ReadArticle(){


  const [articleContent, setArticleContent] = useState(null)
  const [articleTitle, setArticleTitle] = useState(null)
  const [articleAuthor, setArticleAuthor] = useState(null)
  const [articleSource, setArticleSource] = useState(null)
  const [articlePublish, setArticlePublish] = useState(null)

  // get this part to work, which it doesn't right now because it does not specify the protocol or port
  // fetch("/api")
    
  // specifying localhost:3001/api is hardcoded, but works.
  // fetch("http://localhost:3001/api")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleUrl = urlParams.get("url");
    const articleTitle = urlParams.get("title");
    const articleAuthor = urlParams.get("author");
    const articleSource = urlParams.get("source");
    const publishedAt = urlParams.get("publish");
  

  fetch(`http://localhost:3001/read?url=${encodeURIComponent(articleUrl)}`)
    .then((res) => res.json())
    .then((data) => {
      setArticleContent(data.content);
      setArticleTitle(articleTitle);
      setArticleAuthor(articleAuthor);
      setArticleSource(articleSource);
      setArticlePublish(publishedAt);
    })
    .catch((error) => console.error(error));
}, []);

    return(
      <div>
        <h1>{articleTitle}</h1>
        <h2>{articleAuthor}</h2>
        <h2>{articleSource}</h2>
        <h3>{articlePublish}</h3>
        <div>
          {!articleContent ? (
            "Loading..."
          ) : (
            <div>
              <p>{articleContent}</p>
            </div>
          )}
        </div>
      </div>
    );
}
export default ReadArticle
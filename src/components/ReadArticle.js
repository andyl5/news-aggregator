import { useEffect, useState } from "react"

function ReadArticle(){

  const serverURL = process.env.REACT_APP_BACKEND_SERVER_URL

  const [articleUrl, setArticleUrl] = useState(null)
  const [articleContent, setArticleContent] = useState(null)
  const [articleTitle, setArticleTitle] = useState(null)
  const [articleAuthor, setArticleAuthor] = useState(null)
  const [articleSource, setArticleSource] = useState(null)
  const [articlePublish, setArticlePublish] = useState(null)
  const [articleImage, setArticleImage] = useState(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleUrl = urlParams.get("url");
    const articleTitle = urlParams.get("title");
    const articleAuthor = urlParams.get("author");
    const articleSource = urlParams.get("source");
    const publishedAt = urlParams.get("publish");
    const articleImage = urlParams.get("image");
    setArticleUrl(articleUrl)

  fetch(`${serverURL}/read?url=${encodeURIComponent(articleUrl)}`)
    .then((res) => res.json())
    .then((data) => {
      setArticleContent(data.content);
      setArticleTitle(articleTitle);
      setArticleAuthor(articleAuthor);
      setArticleSource(articleSource);
      setArticlePublish(publishedAt);
      setArticleImage(articleImage)
    })
    .catch((error) => {
      // console.error(error)
    });
}, []);

    return(
      <div className="container">
        <h1 className="lead">
          {!articleContent ? (
            <div>
              <h1 className="display-5">Loading...</h1>
              <p><a className="lead" href={articleUrl} target="_blank">Click here</a> to read the article on the original website.</p>
            </div>
            ) : (
            <div>
              <h1 className="display-5">{articleTitle}</h1>
              <h1 className="lead text-muted">By {articleAuthor}, {articleSource}</h1>
              <h1 className="lead text-muted">Published {articlePublish}</h1> 
              <img className="mb-4" src={articleImage} style={{width: '80%', height: 'auto'}}></img>
              <p className="lead">{articleContent}</p>
              <p><a className="lead" href={articleUrl} target="_blank">Click here</a> to read this article on the original website.</p>
            </div>
          )}
        </h1>
      </div>
    );
}
export default ReadArticle
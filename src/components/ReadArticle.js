import { useEffect, useState } from "react"

function ReadArticle(){


  const [articleContent, setArticleContent] = useState(null)
  useEffect(() => {
    // get this part to work, which it doesn't right now because it does not specify the protocol or port
    // fetch("/api")
    
    // specifying localhost:3001/api is hardcoded, but works.
    fetch("http://localhost:3001/api")

      .then((res) => res.json())
      .then((data) => setArticleContent(data.content))
  }, []);


    return(
        <div>
            <p>{!articleContent ? "Loading..." : articleContent}</p>
            <h1>HELLO</h1>
        </div>
    )
}
export default ReadArticle
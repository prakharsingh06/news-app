import { useState } from "react";
import { Grid} from "@mui/material";
import { useEffect } from "react";

//component
import Post from "./Post";


const Posts = ({currentCategory,text})=> {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${currentCategory}&language=en&apiKey=1ad38ddce45742b79c50d684139d32cf`
    ).then((result) => {
      result.json().then((data) => {
        console.log(data);
        let filteredData = data.articles.filter(news => news.title.includes(text))
        setPosts(filteredData);
      });
    });
  }, [currentCategory,text]);
    return (
        <>
        
        
        {
            
            posts.map((post) => (
            
            <Grid item lg={3} sm={4} xs={12}>
                <a href={post.url} style={{textDecoration:'none',color:'inherit'}}>
                    <Post title={post.title} description={post.description} urlToImage={post.urlToImage} url={post.url} source={post.source.name} />
                </a>
                
            </Grid>
            
            
        ))
        }
        </>
        
    )
}

export default Posts;
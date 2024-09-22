
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";


export default function Home() {
  const [posts, setPosts] = useState([]);
  

  
  useEffect(() => {
    const fetchPosts = async () => {
     
      setTimeout(() => {
        
        const mockData = [
          { id: 1, title: "First Post", content: "This is the first post." },
          { id: 2, title: "Second Post", content: "This is the second post." },
          { id: 3, title: "Third Post", content: "This is the third post." },
        ];
        setPosts(mockData); 
      }, 1000); 
    };

    fetchPosts(); 
  }, []); 

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} /> 
        <Sidebar />
      </div>
    </>
  );
}


import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvb2QlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D" />
      <Post img="https://media.istockphoto.com/id/2149153835/photo/black-woman-breath-and-hand-on-chest-for-meditation-and-wellness-being-peaceful-to-relax.webp?a=1&b=1&s=612x612&w=0&k=20&c=cKwuvSgyjkjd5iGpmmwB1ywBKos0IsgPCHiGB_D04MA=" />
      <Post img="https://images.unsplash.com/photo-1455853828816-0c301a011711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2QlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D"/>
      <Post img="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D"/>
      <Post img="https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2QlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D"/>
    </div>
  );
}

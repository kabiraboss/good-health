/*import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}*/
import { useContext, useState, createContext } from "react";
import "./write.css";


const MockContext = createContext({ user: { username: "JohnDoe" } }); 

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");  
  const [file, setFile] = useState(null); 
  const { user } = useContext(MockContext);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newPost = {
      username: user.username, 
      title,
      desc, 
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename); 
      data.append("file", file); 
      newPost.photo = filename; 
      console.log("Simulating file upload:", filename); 
    }
    console.log("New Post:", newPost);
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput" 
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])} 
          />
       
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

       
       <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)} 
          ></textarea>
        </div>
        
       
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
} 


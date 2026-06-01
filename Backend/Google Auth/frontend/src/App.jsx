import React from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [file, setFile] = useState(null);

  const formData = new FormData();
  
  const handleFileUpload = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/files/upload-files",
        formData,
      );
      console.log("first")
      formData.append("image", file);
      await setFile(e.target.files[0]);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>This is demo of imageKit and multer</h1>
      <input type="file" />
      <button onClick={handleFileUpload} type="button">
        upload
      </button>
    </div>
  );
};

export default App;

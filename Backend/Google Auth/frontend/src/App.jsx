import React from "react";
import { useState } from "react";
import axios from "axios";
const App = () => {
  /* This code for sending single file */
  // const [file, setFile] = useState(null);

  /* This code for sending multiple files */
  const [files, setFiles] = useState([]);

  /* This code for sending single file */
  // const formData = new FormData();
  // formData.append("image", file);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  /* This code for sending single file */
  // const handleFileUpload = async (e) => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/files/upload-files",
  //       formData,
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  /* This code for sending multiple files */
  const handleFilesUpload = async (e) => {
    try {
      const formData = new FormData();
      console.log(files);
      files.forEach((file) => {
        formData.append("images", file);
      });

      const res = await axios.post(
        "http://localhost:3000/api/files/upload-files",
        formData,
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* This code for sending multiple files */
  const handleFilesChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <h1>This is demo of imageKit and multer</h1>

      {/* This code for sending single file */}
      {/* <input onChange={handleFileChange} type="file" />
      <button onClick={handleFileUpload} type="button">
        upload
      </button> */}

      <input onChange={handleFilesChange} multiple type="file" />
      <button onClick={handleFilesUpload} type="button">
        Upload All
      </button>
    </div>
  );
};

export default App;

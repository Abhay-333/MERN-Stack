const Imagekit = require("imagekit");

const storageInstance = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE,
  publicKey: process.env.IMAGEKIT_PUBLIC,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
});

const sendFile = async (file, fileName) => {
  try {
    let options = {
      file,
      fileName,
      folder: "google-auth",
    };
    return await storageInstance.upload(options);
  } catch (error) {
    console.log("error in imagekit", error);
  }
};

module.exports = sendFile;

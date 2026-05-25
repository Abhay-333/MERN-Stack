const Imagekit = require("imagekit");

const storageInstance = new Imagekit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  privateKey: process.env.IMAGEKIT_PRIVATE,
  publicKey: process.env.IMAGEKIT_PUBLIC,
});

let sendFiles = async (file, fileName) => {
  let options = { file, fileName };

  return await storageInstance.upload(options);
};

module.exports = sendFiles;
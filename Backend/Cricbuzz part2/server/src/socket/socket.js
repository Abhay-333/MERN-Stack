let ioInstance = null;

export const initSocket = () => {   
  server.listen(8000, () => {});
  ioInstance = io;

  
};

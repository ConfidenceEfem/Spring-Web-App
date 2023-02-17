export const ErrorFunction = (err) => {
    return err.response && err.response.data.message
      ? err.response.data.message
      : err.message;
  };
  

  export const ApiLink = {
    link: "https://freedompadi.onrender.com",
  }
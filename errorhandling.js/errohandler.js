// import HTTPError from "./HTTPError.js";

// export default (err, req, res, next) => {
//   // console.log(err.message);
//   // console.log(err.statusCode);

//   let statusCode = err.statusCode || 500;
//   let error = err.message || "Internal Server Error";
//   let message = err.message || "Something went wrong";

//   if (err.statusCode == 404) {
//     error = "Not Found";
//   } else if (err.statusCode == 400) {
//     error = "Bad Request";
//   }

//   //TODO lav alle de andre error navne her
//   res.status(err.statusCode).json({
//     message: err.message,
//     error: error,
//     statusCode: err.statusCode,
//   });
// };

export default (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  let error = err.message || "Internal Server Error";

  if (statusCode === 404) {
    error = "Not Found";
  } else if (err.statusCode === 400) {
    error = "Bad Request";
  }

  res.status(statusCode).json({
    message: message,
    error: error,
    statusCode: statusCode,
  });
};

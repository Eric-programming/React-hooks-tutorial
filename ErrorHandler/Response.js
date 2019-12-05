const ErrorClass = require("./ErrorClass");
exports.successRes = (message, data) => {
  // let length = null;
  // if(data.length === undefined){
  //     length = undefined
  // }
  // else{
  //     length = data.length
  // }
  //console.log('length', length)
  return {
    message,
    data: data ? data : undefined
    //length
  };
};

exports.catchAsync = (fn, errorCode) => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => {
      console.log("err", err);
      next(new ErrorClass(err, errorCode));
    });
  };
};

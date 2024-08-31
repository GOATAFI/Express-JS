function userCredentials(req, res, next) {
  console.log("Username : alex");
  console.log("email : alexvodai@gmail.com");
  console.log("password : 123456 ");
  console.log("Age : 23");
  next();
}

export default userCredentials;

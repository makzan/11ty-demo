exports.handler = (event, context, callback) => {
  // accesscode
  console.log("---Event---");
  console.log(event);  
  
  console.log("---Context---");
  console.log(context);
  
  console.log("---Form Data---");
  console.log(event.body)
  
  result = "/"
  
  if (event.body == "accesscode=demo") {
    result = "/super-long-url-here-to-hide-the-gated-content/"
  }
  
  context.succeed({
    location : result
  });
  
//   callback(null, {
//     statusCode: 200,
//     body: result
//   });
}

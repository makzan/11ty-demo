exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World. This is from server-side."
  });
}

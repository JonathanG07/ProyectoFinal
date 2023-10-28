export function errorHandler(error, resquest, response, next) {
  console.log(error.name);
  if (error.name === "CastError") {
    return response.status(404).json({ error: "that is not an id" });
  }
  if (error.name === "ReferenceError") {
    return response.status(404).json({ error: "ReferenceError" });
  }
  if (error.name === "ValidationError") {
    return response.status(404).json({ error: "ValidationError" });
  }
  next();
  // or
  // response.status(404).end();
}
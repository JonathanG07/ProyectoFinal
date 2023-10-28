// me permite definir que hacer con las rutas desconocidas
export function unknownEndpoint(request, response, next) {
  response.status(400).json({ error: "unkwon endpoint" });
}

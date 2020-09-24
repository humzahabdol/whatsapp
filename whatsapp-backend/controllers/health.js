export async function get(req, res, _next) {
  try {
    res.status(200).send("Hello World");
  } catch (err) {
    res.status(503).send("Service unavailable");
  }
}

export default { get };

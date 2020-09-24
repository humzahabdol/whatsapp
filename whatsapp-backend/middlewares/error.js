import uuid from "uuid";
import Boom from "boom";

const id = uuid();

export function notFound(_req, _res, next) {
  return next(Boom.notFound("The specified resource was not found."));
}

export function error(err, req, res, _next) {
  const errorId = req.errorId || id;
  Object.assign(req, { errorId });

  const boomOptions = {
    statusCode: err.statusCode || 500,
    override: false,
  };

  const kaboom = Boom.boomify(err, boomOptions);
  const { payload } = kaboom.output;

  return res.status(kaboom.output.statusCode).json({
    errorId: req.errorId,
    errorCode: payload.error,
    errorMessage: payload.message,
    errors: payload.errors,
  });
}

export default { notFound, error };

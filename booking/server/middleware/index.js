exports.provideErrorHandler = (req, res, next) => {
  res.sendApiError = (config) => {
    const { status, title, detail } = config;
    return res.status(status).send({ errors: [{ title, detail }] });
  };

  res.mongoError = (dbError) => {
    const normalizeErrors = [];
    const errorField = "errors";
    if (
      dbError.hasOwnProperty(errorField) &&
      dbError.name === "ValidationError"
    ) {
      const errors = dbError[errorField];
      for (let property in errors) {
        normalizeErrors.push({
          title: property,
          detail: errors[property].message,
        });
      }
    } else {
      normalizeErrors.push({
        title: "DB Error",
        detail: "Something went wrong",
      });
    }
    return res.status(422).send({ errors: normalizeErrors });
  };
  next();
};

const sslMiddleware = (req, res, next) => {
  if (
    'production' === process.env.NODE_ENV &&
    req.headers['x-forwarded-proto'] != 'https'
  ) {
    return res.redirect(301, 'https://' + req.hostname + req.originalUrl);
  }

  next();
};

module.exports = sslMiddleware;

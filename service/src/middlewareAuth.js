const getAuthToken = (req, res, next) => {
  if (req.headers.authorization) {
    req.authToken = req.headers.authorization.split(' ');
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
 getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      if (authToken[0] === 'Daniel' && authToken[1] === 'Lopez') {
        return next();
      } else {
        throw 'Error'
      }
    } catch (e) {
      return res.status(401).send({ message: 'It\'s not authorized' });
    }
  });
};

module.exports = checkIfAuthenticated
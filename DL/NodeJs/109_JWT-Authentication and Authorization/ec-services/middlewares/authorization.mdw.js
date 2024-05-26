const jwt = require('jsonwebtoken');

const authorizationService = {
    authorize: async (req, res, next) => {
        try {
            await jwt.verify(req.headers.authorization, "You can't steel my information present in token.");
            next();
        } catch(error) {
            if (error.message.includes('jwt expired')) {
                res.status(401);
                res.send({
                    error: 'Unauthorized',
                    errorDescription: 'Token expired, please login again.'
                });
            } else {
                res.status(500);
                res.send({
                    error
                });
            }
        }
    }

};

module.exports = authorizationService;
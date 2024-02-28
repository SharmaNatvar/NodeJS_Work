const Joi = require('joi')

const player = {
    body: Joi.object().keys({
        userName: Joi.string().required().trim(), 
        email: Joi.string().required().trim(),
        fullName: Joi.string().required().trim(),
      }),
}


module.exports={player}
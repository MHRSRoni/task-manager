import joi from 'joi'

const loginSchema = joi.object({
    email : joi.string().trim().email({tlds : {allow : false}}).required(),
    password : joi.string().trim().required().min(8)
})
/**
 * validate login form
 * @param {object} data user info
 * @param {string} data.email user email
 * @param {string} data.password user password
 * @returns {result} {value, error}
 */
export const loginFormValidate = (data) =>{
    const result = loginSchema.validate(data)
    return result
}
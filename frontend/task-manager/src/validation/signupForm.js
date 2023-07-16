import joi from "joi"

const signupSchema =joi.object({
    name : joi.string().trim().required().min(3),
    email : joi.string().trim().email({ tlds: { allow: false } }).required(),
    password : joi.string().trim().required().min(8),
    cpassword : joi.string().valid(joi.ref("password")).required(),
})

export const signupFormValidate = async (formData) => {
    const result = await signupSchema.validate(formData)
    return result
}

/**
 * login form submit
 * @async
 * @param {object} data - User info
 * @param {string} data.email - User Email
 * @param {string} data.pasword - User Password 
 * @return {object} {value, error}
 */

export const loginFormSubmit = async (data) =>{
    const {email, password} = data
    const bodyData = {email, password}

    const url = 'http://localhost:4000/login'
    const reqOpt = {
        method : "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(bodyData)
    }
    const response = await fetch(url,reqOpt)
                            .then(res => res.json())
                            .then(data => data)
                            .catch(err => err)
    return response
}
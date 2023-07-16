
export const signupFormSubmit =async (data)=>{
    
    const {name, email, password} = data
    const formData = {name, email, password}

          const reqOpt = {
            method : "POST",
            headers : {
            //   'content-type' : "application/json"
              "Content-Type": "application/json"
            },
            body : JSON.stringify(formData)
          }
        
        const result =
           await fetch("http://localhost:4000/signup", reqOpt)
          .then(res =>{
                if(res.ok){
                 return res.json()}
                else{return res.json()}
                })
          .then(data =>{
                    return data
                })
          .catch(err=>{
            console.log(err)
                return err
                })
        return result
}
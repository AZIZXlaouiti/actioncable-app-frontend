import { Form } from '../reducers/type'
const URL =  process.env.REACT_APP_URL
console.log(URL)
export const login = async (form:Form) => {
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = form
    const response = await fetch(`http://${URL}/login`, { method: method, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()
    return data
}

export const signup = async (form:Form) => {

    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = form
    const resp = await fetch(`http://${URL}/signup`,    
                    { method: method, headers: headers, body: JSON.stringify(body) 
            })
    const data = await resp.json()
    return data
}

export const getCurrentUser = (token:string) => {
    return async (dispatch:any) =>{

        
        const headers = { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        const response = await fetch(`http://${URL}/profile`, 
                 {
                    headers: headers 
                })
        const data = await response.json()
       
        if(data.user) {
            dispatch({ type: "LOGIN", payload: data })
          }
    }

}
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";

const d = document;

export default function(){
    
}

d.addEventListener('submit', e=>{
    if (e.target.matches('#form-login')){
        login(e)
    }
})

async function submitlogin(e){
    try {
        const data = await ajax({url:api.LOGIN, options:{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        }})
                
        return data
    } catch (error) {
        console.log(error)
        return data
    }
}

async function login(e){
    const data = await submitlogin(e)
    if (!data) {
        d.getElementById('form-response').classList.remove('d-none')
        setTimeout(() => {d.getElementById('form-response').classList.add('d-none')}, 5000);
        return
    }
    localStorage.setItem('token', data.token)
    alert('Ha iniciado sesión con éxito!')
    location.href = '/'
}
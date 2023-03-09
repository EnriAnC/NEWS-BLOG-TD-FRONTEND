import Loading from "../components/Loading.js";
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";

const d = document;

d.addEventListener('submit', async e=>{
    e.preventDefault()
    if (e.target.id === 'form-register'){
        
        await submmitAndDrawRegister(e)

    }   
})

async function submmitAndDrawRegister(e){
    const $response = d.querySelectorAll(".contact-form-response");
    const loader = Loading(0.5, 0.5, "#000").fullscreen()
    loader.firstElementChild.style.backgroundColor = "#fff"
    e.target.append(loader)
    const res = await submitRegister(e)
    e.target.removeChild(e.target.lastElementChild)
    if (res.code == 600){
        $response[0].classList.remove('display-none')
        setTimeout(() => { $response[0].classList.add("display-none") }, 3000); 
        // alert(`${res.msg}`)
    }
    else if (res.code == 601){
        $response[1].classList.remove('display-none')
        setTimeout(() => { $response[1].classList.add("display-none") }, 3000); 
        // alert(`${res.msg}`)
    } else {
        // alert(res.usuario ? `Hola ${res.usuario}, te has registrado correctamente ` : res.msg )
        e.target.innerHTML = `
            <h3>Se ha registrado correctamente!</h3>
            <p>Se rediccionará a la página anterior</p>
        `
        setTimeout(() => { history.back() }, 500); 
    }
}

async function submitRegister(e){
    try {
        
        const data = await ajax({url:api.REGISTER, options:{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        }})
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return data
    }
}

export default function(){
    console.log('Esta en la pagina de registro')
}
import Category from "./components/Categories.js";
import News from "./components/News.js";
import route from "./routes/routes.js";

const d = document;

const thisSession = localStorage.getItem('token')

const routes = route()

const news = News()
const category = Category()

console.log(news)
d.addEventListener('DOMContentLoaded', async e=>{
    await routes.add("/", "../pages/home.html")
    await routes.add("/#login", "../pages/login.html")
    await routes.add("/#register", "../pages/register.html")
    await routes.add("/#writen-news", "../pages/write-news.html")
    await routes.add("/#news", "../pages/news.html")
    await routes.add("/#category", "../pages/category.html")
    await routes.init()

    await category.getAll()
    category.drawCategoriesOnMenu()
})

d.addEventListener('click', async e=>{
    await routes.onClickActivate(e)      
    logout(e)

    // goToNews(e)
})

window.addEventListener('popstate', e=>{
    routes.popstate(e)
})


if (!thisSession){
    panelToUser(false)
    panelToAny(true)
}
else if (thisSession){
    panelToUser(true)
    panelToAny(false)
}


function panelToUser(boolean){
    if (boolean){
        d.querySelectorAll("[displayToUser]").forEach(el=>{
            el.classList.remove('d-none')
        })
    } else {
        d.querySelectorAll("[displayToUser]").forEach(el=>{
            el.classList.add('d-none')
        })
    }
}

function panelToAny(boolean){
    if (boolean){
        d.querySelectorAll("[displayToAny]").forEach(el=>{
            el.classList.remove('d-none')
        })
    } else {
        d.querySelectorAll("[displayToAny]").forEach(el=>{
            el.classList.add('d-none')
        })
    }
}

// async function goToNews(e){
//     if(e.target.dataset.id_news){
//         const id_news = e.target.dataset.id_news
//         console.log(e)
//         await routes.add(`/#news?=${id_news}`, "../pages/news.html")
//         console.log(routes.routes)
        
//         routes.insertOn(routes.routes[`/#news?=${id_news}`])
//     }

// }

function logout(e){
    if (e.target.matches('#close-session')){
        localStorage.removeItem('token')
        location.href = '/'
    }
}

export { news, category }
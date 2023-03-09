import { ajax } from "../helpers/ajax.js"
import api from "../helpers/api.js"
const d = document;
function News(){
    return {
        allNews: null,
        async getAll(){
            this.allNews = await ajax({url:api.ALLNEWS})
            console.log(this.allNews)
            return this.allNews
        },
        async post(e){
            const FD = new FormData(e.target)
            const newNews = await ajax({url:api.NEWS, options:{
                method:"POST",
                headers:{
                    "authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body: FD
            }})
            return newNews
        },
        drawTitles(){
            if (!this.allNews) return
            const ul = d.getElementById('last-news-from-api')
            const li = d.createElement('li')
            li.classList.add('list-group-item')
            this.allNews.forEach(news=>{
                li.textContent = news.title
                li.setAttribute('srchtml', "./pages/news.html")
                li.dataset.id_news = news.id_news
                ul.append(li.cloneNode(true))
            })
        }
    }
}

export default News
import { category, news } from "../index.js";

const d = document;
console.log(category)
export default function(){
    category.drawCategoriesOnWriteNews()
}

d.addEventListener('submit', async e=>{
    if (e.target.matches('#post-news-form')){
        const newNews = await news.post(e)
        console.log(newNews)
        if (!newNews) return alert('Error al enviar')
        if (newNews) return alert('Se ha enviado correctamente')
    }
})


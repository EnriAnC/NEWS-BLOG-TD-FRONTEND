import { news } from "../index.js";

const d = document;

export default async function(){
    // await news.getAll()
    // newsPage()
}

// function newsPage(){
//     const hash = location.hash
//     const id_news = hash.split('news?=')[1]
//     const thisNews = news.allNews.filter(el => el.id_news == id_news)
//     const fragment = d.createElement('div')
//     fragment.innerHTML = `
//     <div class="news-block container p5">
//     <div class="row">
//         <div class="col col-12">
//             <img src="../src/img/promises.png" alt="" id="news-img">
//         </div>
//         <div class="col col-12">
//             <h2 class="news-title">${thisNews.title}</h2>
//         </div>
//         <div>
//             <p>Categoria: <span id="news-category">FRONTEND</span></p>
//         </div>
//         <div class="col col-12">
//             <h2 class="news-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam eos autem porro soluta voluptate ipsa, quisquam doloribus harum repellendus nihil cum nostrum, quod odio commodi at? Nisi, sapiente itaque.</h2>
//         </div>
//         <div>
//             <span>Me gusta:</span><span id="news-likes">0</span><br>
//             <span>No me gusta:</span><span id="news-dislikes">0</span>
//         </div>
//     </div>
// </div>
//     `
//     d.querySelector('.main').append(fragment)
// }
import { ajax } from "../helpers/ajax.js"
import api from "../helpers/api.js"
const d = document;
function Category(){
    return {
        allCategories: null,
        async getAll(){
            if (!this.allCategories) this.allCategories = await ajax({url:api.CATEGORIES})
            return this.allCategories
        },
        async drawCategoriesOnMenu(){
            if (!this.allCategories) this.allCategories = await ajax({url:api.CATEGORIES})
            const ul = d.getElementById('list-categories-api')
            console.log(ul)
            const li = d.createElement('li')
            this.allCategories.forEach(x=>{
                li.innerHTML = `<a class="dropdown-item" srchtml="./pages/category.html" data-bs-dismiss="offcanvas" aria-label="Close">${x.category}</a>`
                ul.append(li.cloneNode(true))
            })
        },
        async drawCategoriesOnWriteNews(){
            if (!this.allCategories) this.allCategories = await ajax({url:api.CATEGORIES})
            const select = d.getElementById('id_category')
            const option = d.createElement('option')
            this.allCategories.forEach(x=>{
                option.value = x.id_category
                option.textContent = x.category
                select.append(option.cloneNode(true))
            })
        }
    }
}

export default Category
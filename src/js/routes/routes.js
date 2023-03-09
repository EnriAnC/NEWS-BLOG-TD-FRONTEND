import { HtmlDocumentFragment } from "../assets/HtmlDFragment.js"
const d = document;

function route(){
    
    
    return {
        routes:{},
        async add(url, src, cb=null, name=null, html=null){
            if(!this.routes[src]) this.routes[src] = {url}
            name = src.split('/')[2].split('.')[0]
            cb = await import(`../pages/${name}.js`)
            cb = cb.default
            if(!this.routes[url]) this.routes[url] = {url, src, cb, name, html}
        },

        async init(querySelector = '.main'){
            const route = this.routes[`/${location.hash}`] ? this.routes[`/${location.hash}`] : null
            if (location.hash == route.url.split('/')[1]){
                this.insertOn(route, querySelector)
            }            
        },

        async onClickActivate(e, querySelector='.main'){
            if(e.target.matches('[srchtml]')){
                let route = this.routes[`.${e.target.getAttribute('srchtml')}`]
                if (route){
                    if (location.hash == route.url.split('/')[1]) return
                    route = this.routes[route.url] ? this.routes[route.url] : null
                    this.insertOn(route, querySelector)
                    
                }   
            }
        },
        async insertOn(route, querySelector='.main'){
            d.querySelector(querySelector).textContent = ''
            if (route.html){
                d.querySelector(querySelector).append(route.html.cloneNode(true))
            } else {
                route.html = await new HtmlDocumentFragment().fetchHTML(route.src)
                d.querySelector(querySelector).append(route.html.cloneNode(true))
            }
            if(route.cb) route.cb()
            history.pushState(route.name, "", route.url);
        }
        ,
        async popstate(e){
            const route = Object.values(this.routes).filter(el=>{
                // console.log(el)
                if (el.name == e.state){
                    return el
                }
            })
            console.log(route)
            await this.insertOn(route[0])
        },
    }
}

export default route
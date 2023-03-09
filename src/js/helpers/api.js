// const NAME = 'chocolateria-backend-node-production.up.railway.app',
//     DOMAIN = `https://${NAME}`,
const NAME = 'news-blog-td-backend-production.up.railway.app',
    DOMAIN = `http://${NAME}`,
    SITE = `${DOMAIN}`,
    API = `${SITE}/api/v1`,
    ALLNEWS = `${API}/allNews`,
    NEWS = `${API}/news`,
    LOGIN = `${API}/login`,
    REGISTER = `${API}/register`,
    CATEGORIES = `${API}/categories`
    
    
    
export default { DOMAIN, 
    SITE,
    API, 
    ALLNEWS,
    NEWS,   
    LOGIN,
    REGISTER,
    CATEGORIES
}

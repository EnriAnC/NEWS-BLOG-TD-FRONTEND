// const NAME = 'chocolateria-backend-node-production.up.railway.app',
//     DOMAIN = `https://${NAME}`,
const NAME = 'localhost',
    PORT = 3000,
    DOMAIN = `http://${NAME}:${PORT}`,
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
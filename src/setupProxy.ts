const proxy = require('http-proxy-middleware');

export const demo:any = (app:any)=> {
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:5800/',
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }));
};
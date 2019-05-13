const proxy = require('http-proxy-middleware');

const demo:any = (app:any)=> {
  app.use(proxy('/.netlify/functions/', { 
    target: 'http://localhost:8080/',
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }));
};

export default demo
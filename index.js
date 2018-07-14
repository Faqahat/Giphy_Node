const axios = require('axios');

axios.get('https://api.github.com/users/faqahat').then(res=>{
    console.log(res);
}).catch((err)=>{
    console.log("ERROR "+err)
})

const api_key = "28nAz9IUUxrDN6ROyNuZGwzwa5x9lAV5";
const names = ["cats","cat","cat meme","funny cats","kittens","kitten","funny kitten","cats meme","lol cat"];
const axios = require("axios");
const http = require("http");

http.createServer((req,res) => {
    if(req.url == "/")
    {
        var rand = names[Math.floor(Math.random()*names.length)];
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&tag=${rand}`;
        res.writeHead(200,{"Content-Type":"text/html"});
        axios.get(url).then( x => {
            data = JSON.parse(JSON.stringify(x['data']));
            imgSrc = data.data[0].images.original.url;
            RawTitle = data.data.title;
            
           // Moretitle = RawTitle.replace("GIF","");
          //  title = Moretitle.split('by');
            console.log(RawTitle);
            console.log("Random: "+ rand);
            return imgSrc;
        }).then(imglnk =>{
            res.write(`<img src='${imglnk}'>`);
            res.end();
        }).catch(err => {
            res.end("ERROR: " + err);
        
        });
        
    }
}).listen(80);


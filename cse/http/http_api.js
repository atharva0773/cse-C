const http = require('http');
const axios = require('axios');
const port = 4000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

        const response = await axios.get("https://dummyjson.com/products");
        const allproducts = response.data.products;

        let frontend = `<html><head></head><body>`;
        allproducts.forEach((product) => {
            frontend += `<div><img src="${product.thumbnail}" alt="${product.title}"><div>${product.title}</div></div>`;
        });
        frontend += `</body></html>`;

        res.end(frontend);
    
});

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
const http = require('http');
const axios = require('axios');
const port = 4000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

        const response = await axios.get("https://api.github.com/search/users",{
            params:{
                q:"location:ghazibad"
            }
        });
        const alldata = response.data.iteams;
        let frontend = `<html><head></head><body>`;
        alldata.forEach((user) => {
            frontend += `<div><img src="${user.avatar_url}"><div>${user.login}</div></div>`;
        });
        frontend += `</body></html>`;

        res.end(frontend);
    
});

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
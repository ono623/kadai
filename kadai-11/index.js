const http = require('http')


const server = http.createServer((req, res) => {
    const num = Math.random()
    res.setHeader('Access-Control-Allow-Origin', '*');

        if(num < 0.5) {
            alert('来世は普通の人間です')
        }　else if(num < 0.8){
            alert('来世はお金持ちの人間です')
        }　else if(num < 0.95){
            alert('輪廻から解脱します')
        }　else {
            alert('来世はマンボウです')
        }
        
    res.write(result)
    res.end()
})
server.listen(3000)
console.log("The server is listening...")

// https://3000-a4a8efdd-82bf-4f53-95d3-4b0962270dff.ws-ap01.gitpod.io/kadai-11/
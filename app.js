// 1-Intro 

// const amt=12

// if(amt<10)
// {
//     console.log('small number');
// }
// else
// {
//     console.log('large number');
// }

// console.log('my 1st node app');


//2-Global variable

// console.log(__dirname);
// setInterval(()=>{
//     console.log("hello")
// },1000)


//3-Modules


//OS module
//const os = require('os')
    //info about current user
    //console.log(os.userInfo())

    //uptime
    //console.log(`${os.uptime()/60}`)

    // const currentOS={
    //     name:os.type(),
    //     release:os.release(),
    //     totMem:os.totalmem(),
    //     freemem:os.freemem(),
    // } 

    // console.log(currentOS)


//HTTP module

const http = require('http')

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('home')
    }
    else if(req.url==='/about'){
        res.end('history')
    }
    else{
    res.end(`
    <h1>Ooops!!!</h1>
    <a href="/"> back home </a>
    `)
    }
})

server.listen(8000)

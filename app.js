
// const os = require('os')

// const user = os.userInfo()
// console.log(user);

// const currentOs = {
//  name:os.type(),
//  freeMem:os.freemem(),
//  totalMem:os.totalmem(),
// release:os.release(),
// uptime:os.uptime()
// }
// console.log(currentOs);

// const path = require('path')

// const sep = path.sep;
// console.log(sep);

// const filepath = path.join('/contents','subfolder','text.txt')
// console.log(filepath);

// const absolute = path.resolve(__dirname,'contents','subfolder','text.txt')
// console.log(absolute);
// const base = path.basename(filepath)
// console.log(base);

// const {readFileSync,writeFileSync} = require('fs')


// const first = readFileSync('./contents/one.txt','utf8')
// const second = readFileSync('./contents/two.txt','utf8')
// console.log(first,second);

// writeFileSync('./contents/sync-file.txt',`This is ${first} ${second}`,{
//  flag:'a'
// })


// const {readFile,writeFile} = require('fs')

// console.log('start');


// readFile('./contents/one.txt','utf8',(err,result)=> {
//  if(err) {
//   console.log(err);
//   return
  
//  }
//  const first = result
  
 
//  readFile('./contents/two.txt','utf8',(err,result)=> {
//   if(err) {
//   console.log(err);
//   return
  
//  }
//  const second = result


//  writeFile('./contents/async-file',`This is ${first} ${second}`,{flag:'a'},(err,result)=> {
//   if(err) {
//    return
//   }
//   console.log(result);
  
//  })
  
//  console.log('done with writing file');
 
//  })
// })

// console.log('starting next task');


const http = require('http')

const server = http.createServer((req,res)=> {
 if(req.url ==='/') {
  res.end('welcome to home page')
 }
 if(req.url ==='/about') {
  res.end('welcome to about page')
 }
 res.write(`<h1>opps its a dead end</h1> <a href='/'>back home</a>`)
 res.end()
})

server.listen(5000)
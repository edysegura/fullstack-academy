// const fs = require('fs')
// const path = './'
// fs.readdir(path, (err, files) => {
//   if(err){
//     console.log('ocorreu um erro.')
//   }else{
//     console.log(files)
//   }
// })

const fs = require('fs')
const { promisify } = require('util')
const readdirPromise = promisify(fs.readdir)

const path = './'

readdirPromise(path)
.then(files => console.log(files))
.catch(error => console.log('An error occurred.'))
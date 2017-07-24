const fs = require('fs')
const { promisify } = require('util')
const readdirPromise = promisify(fs.readdir)
const statPromise = promisify(fs.stat)

const path = './'

async function stat(file) {
    const stat = await statPromise(file)
    return {
        file,
        stat
    }
}

async function listFiles(path) {
    try {
        const all = await readdirPromise(path)
        const promises = all.map(async (file) => await stat(file))
        const promisesFulfilled = await Promise.all(promises)
        
        const files = promisesFulfilled
                        .filter(file => file.stat.isFile())
                        .map(file => file.file)
        
        console.log(files)
    } 
    catch (error) {
        console.log('An error ocurred.', error)
    }
}

listFiles(path)

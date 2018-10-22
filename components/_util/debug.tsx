const memStorage = require('@popapps/debug/src/memStorage')
memStorage.setDebug('popui:*')

// export const createDebug = require('@popapps/debug/src/browser')
export const createDebug = mockCreateDebug

function mockCreateDebug(names:string[]){
    return console.log
}
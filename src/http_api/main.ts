require('dotenv').config(); 
import {Express} from 'express'
import { initServer } from './init'

class App{
   srv: Express

   constructor(
    srv:Express
   ){
      this.srv = srv
   }
}

const Init = async ():Promise<App>=>{
   // init services 
   const srv = initServer()

   const app:App = new App(
    srv
    );

   return app
}

Init().then((app:App)=>{
    app.srv.listen(Number(process.env.SERVER_PORT),()=>{
        console.log(`api service is running on port ${process.env.SERVER_PORT}`)
    })
}).catch((err)=>{
    throw new Error(err)
})



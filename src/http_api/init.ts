import express,{Express} from 'express'

const initServer=(): Express=>{
    const srv = express();
    srv.use(express.json());
    return srv
}

export {initServer}
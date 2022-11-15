
import express from  'express';
import contomongo from "./db.js";
import router from "./routes/User-route.js";
import cors from 'cors';
import * as dotenv from 'dotenv';
import comrouter from './routes/company-router.js';
import projectrouter from './routes/project-route.js';
dotenv.config({path:'../.env'});
contomongo();

const app = express()
const port = 5000

app.use(cors())

app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/user',router);
app.use('/api/comp',comrouter);
app.use('/api/project',projectrouter)



app.listen(port, () => {
  console.log(`online developer hiring portal app listening on port ${port}`)
})



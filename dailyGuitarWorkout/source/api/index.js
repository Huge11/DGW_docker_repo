import express from 'express';
import importerRoutes from './importerRoutes.js';

const app = express();

app.use('/', importerRoutes);


app.listen(3000, ()=>{
  console.log('listening on port 3000')
})
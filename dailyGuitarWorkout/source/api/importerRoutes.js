import express from 'express';

import {readAllChannels} from '../db/index.js';

const router = express.Router()

router.get('/getAllChannels', (req,res)=>{
  // res.json(readAllChannels())
  console.log(readAllChannels())
})


export default router;
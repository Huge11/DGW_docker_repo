import express from 'express';
import {getUserSettingsByUid} from '../../utils/db/index.js';

const router = express.Router();

router.get('/userSettings/:uid', (req,res)=>{
    getUserSettingsByUid(req.params.uid).then(data=>{
        res.json(data);
    });
});

export default router;
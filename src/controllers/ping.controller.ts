import { Request, Response } from 'express';

export const pingHandler =(req: Request, res: Response): void =>{
    console.log(req.method, req.path);
    console.log("Req Body", req.body);
    console.log("Req Params", req.params);
    console.log("Req Query params", req.query);
    res.send('pong');
}
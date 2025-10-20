import {ZodObject} from 'zod';
import {Request, Response, NextFunction} from 'express';

const validateRequestBody = (schema: ZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parse(req.body);
            console.log("Request body is valid");
            next();
        }
        catch (error) {
            console.error("Request body validation failed:", error);
            res.status(400).json({ error: "Invalid request body", details: error.errors });
        }
    };
}

export {validateRequestBody};
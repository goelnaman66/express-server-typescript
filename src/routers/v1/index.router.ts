import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';

const v1Router = express.Router();

v1Router.get('/ping', pingHandler);

export default v1Router;
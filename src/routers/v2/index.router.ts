import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';

const v2Router = express.Router();

// Define v2 routes here
v2Router.get('/ping', pingHandler);

export default v2Router;
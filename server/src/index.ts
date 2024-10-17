import { MessageRoute } from '@/routes/message.route';
import App from './app';
import logger from './middlewares/logger';
import cors from 'cors';

const app = new App({
  port: 8000,
  middlewares: [logger(), cors()],
  routes: [new MessageRoute()],
});

app.listen();
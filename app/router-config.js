import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'app/views/HomePage.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])
import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}
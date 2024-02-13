import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {

  constructor() {



  }

  testButton() {
    Pop.success('The button Works 😎')
  }

  formSubmit() {
    try {

      Pop.success("Your message has been submitted.")

    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }
}
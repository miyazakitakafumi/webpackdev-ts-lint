import { add } from './add'

const app = document.getElementById('app')
if (app !== null) {
  app.innerText = add(100, 303).toString()
}

import { Controller } from "stimulus"

export default class extends Controller {
  post(url, body) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: body
    })
  }
}
export class Endpoint {
  constructor(url) {
    this.url = url
  }
  
  post(bodyAsObject) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(bodyAsObject),
      headers: { "Content-type": "application/json" },
      credentials: "same-origin"
    })
  }
}
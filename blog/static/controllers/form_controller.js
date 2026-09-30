import Controller from "../application_stimulus"
import { Endpoint } from "../application_extensions"

import backup from "../sprinkles/local-storage"
import stretch from "../sprinkles/stretch"

export default class extends Controller {
  static targets = [ "content" ]
  
  connect() {
    backup.enable(this.contentTarget, "value")
    stretch.enable(this.contentTarget, 243)
    
    this.contentTarget.focus()
  }
  
  submit() {
    this.view.post({content: this.contentTarget.value}).then(() => {
      backup.purge()
      this.closeWindow()
    })
  }
  
  closeWindow() {
    window.close()
    window.opener.location.reload()
  }
  
  get view() {
    return new Endpoint(this.data.get("submit-url"))
  }
}

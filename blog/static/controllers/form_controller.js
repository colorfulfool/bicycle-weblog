import Controller from "../application_stimulus"
import { post } from "../application_extensions"

import backup from "../behavior/local-storage"
import stretch from "../behavior/stretch"

export default class extends Controller {
  static targets = [ "content" ]
  
  connect() {
    backup.connect(this.contentTarget, "value")
    stretch.connect(this.contentTarget, 243)
    
    this.contentTarget.focus()
  }
  
  submit() {
    post(this.submitPath, {content: this.contentTarget.value}).then(() => {
      backup.purge()
      this.closeWindow()
    })
  }
  
  closeWindow() {
    window.close()
    window.opener.location.reload()
  }
  
  get submitPath() {
    return this.data.get("submit-url")
  }
}
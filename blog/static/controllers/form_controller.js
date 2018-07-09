import Controller from "application_stimulus"

import backup from "local-storage"
import stretch from "stretch"

export default class extends Controller {
  static targets = [ "content" ]
  
  connect() {
    backup.connect(this.contentTarget, "value")
    stretch.connect(this.contentTarget, 243)
    
    this.contentTarget.focus()
  }
  
  submit() {
    post(this.submitPath, {content: contentTarget.value}).then(() => {
      backup.purge()
      this.closeWindow()
    })
  }
  
  closeWindow() {
    window.close()
    window.opener.location.reload()
  }
}
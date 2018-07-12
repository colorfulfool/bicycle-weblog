import Controller from "../application_stimulus"
import { Endpoint } from "../application_extensions"

import { toMarkdown } from "to-markdown"

export default class extends Controller {
  static targets = [ "content", "edit", "trueness" ]
  
  delete() {
    this.deleteView.post().then(() =>
      this.element.remove())
  }
  
  edit() {
    if (this.isEditing)
      this.finishEdit()
    else
      this.startEdit()
  }
  
  trueness(event) {
    this.truenessOptionSelected(event.target)
  }
  
  
  startEdit() {
    this.editTarget.classList.add("button--active")
    this.contentTarget.setAttribute("contenteditable", "true")
  }
  
  finishEdit() {
    this.updateView.post({content: this.markdownContent}).then(() => {
      this.editTarget.classList.remove("button--active")
      this.contentTarget.removeAttribute("contenteditable")
    })
  }
  
  
  truenessOptionSelected(truenessOption) {
    var value = truenessOption.getAttribute("data-value")
    
    this.updateView.post({trueness: value}).then(() => {
      this.element.setAttribute("data-trueness", value)
    
      this.truenessTargets.forEach((target) => 
        target.classList.remove("trueness__option--active"))
      truenessOption.classList.add("trueness__option--active") 
    })
  }
  
  
  get markdownContent() {
    return toMarkdown(this.contentTarget.innerHTML)
  }
  
  get isEditing() {
    return this.editTarget.classList.contains("button--active")
  }
  
  
  get updateView() {
    return new Endpoint(this.data.get("update-url"))
  }
  
  get deleteView() {
    return new Endpoint(this.data.get("delete-url"))
  }
}
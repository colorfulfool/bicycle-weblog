import Controller from "../application_stimulus"
import { post } from "../application_extensions"

import { toMarkdown } from "to-markdown"

export default class extends Controller {
  static targets = [ "content", "edit", "trueness" ]
  
  delete() {
    post(this.deleteUrl).then(() =>
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
    post(this.updateUrl, {content: this.markdownContent}).then(() => {
      this.editTarget.classList.remove("button--active")
      this.contentTarget.removeAttribute("contenteditable")
    })
  }
  
  
  truenessOptionSelected(truenessOption) {
    var value = truenessOption.getAttribute("data-value")
    
    post(this.updateUrl, {trueness: value}).then(() => {
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
  
  
  get updateUrl() {
    return this.data.get("update-url")
  }
  
  get deleteUrl() {
    return this.data.get("delete-url")
  }
}
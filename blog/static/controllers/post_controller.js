import Controller from "application_stimulus"

import toMarkdown from "to-markdown"

export default class extends Controller {
  static targets = [ "content", "edit", "trueness" ]
  
  delete() {
    post(this.data.deletePath).then(() =>
      this.element.hide(200))
  }
  
  edit() {
    if (this.isEditing)
      this.finishEdit()
    else
      this.startEdit()
  }
  
  trueness(event) {
    value = event.target.getAttribute("data-value")
    
    post(this.data.updatePath, {trueness: value}).then(() => {
      this.element.setAttribute("data-trueness", value)
    
      truenessTargets.forEach((target) => target.classList.remove("trueness__option--active"))
      event.target.classList.add("trueness__option--active")      
    })
  }
  
  
  startEdit() {
    this.editTarget.classList.add("button--active")
    this.contentTarget.setAttribute("contenteditable", "true")
  }
  
  finishEdit() {
    post(this.data.updatePath, {content: this.markdownContent}).then(() => {
      this.editTarget.classList.remove("button--active")
      this.contentTarget.removeAttribute("contenteditable")
    })
  }
  
  
  get markdownContent() {
    return toMarkdown(this.contentTarget.innerHTML)
  }
  
  get isEditing() {
    return this.editTarget.classList.contains("button--active")
  }
}
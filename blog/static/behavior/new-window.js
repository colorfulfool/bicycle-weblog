$(document).ready(function () {
  
  magicAttribute("data-new-tab", function (selector, newTab) {
    $(selector).click(function () {
      window.open($(this).attr(newTab))
    })
  })
  
});

function magicAttribute(attribute, codeBlock) {
  codeBlock(`[${attribute}]`, attribute)
}
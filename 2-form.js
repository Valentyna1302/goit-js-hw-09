import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),o="feedback-form-state";t.addEventListener("input",a=>{e.email=t.elements.email.value,e.message=t.elements.message.value,console.log(e),localStorage.setItem(o,JSON.stringify(e))});JSON.parse(localStorage.getItem(o));t.addEventListener("submit",a=>{a.preventDefault(),condition});
//# sourceMappingURL=2-form.js.map

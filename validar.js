const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.nodevalue.length <3){
        warnings += "El nombre debe contener 3 caracteres o mas <br>"
        entrar = true
    }
    if(!regexEmail.test(email.value)){
         warnings += "El email no es valido <br>"
         entrar = true
    }
    if(password.value.length <8 ){
        warnings += "La contraseña debe tener al menos 8 caracteres <br>"
        entrar = true
   }
   if(entrar){
    parrafo.innerHTML= warnings
   }
})
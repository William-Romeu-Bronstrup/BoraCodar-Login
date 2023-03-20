const img = document.getElementById("img")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const buttonSubmit = document.getElementById("buttonSubmit")

const messages = document.querySelector(".messages")
const validation = document.querySelectorAll(".validation")

let validPassword, validEmail = false;

img.addEventListener("click", () => {
  if (img.getAttribute("src") == "assets/closeEye.svg") {
    img.setAttribute("src", "assets/openEye.svg")
    img.setAttribute(
      "alt",
      "Imagem que simboliza que o input de senha está sendo mostrado"
    )
    inputPassword.setAttribute("type", "text")
  } else {
    img.setAttribute("src", "assets/closeEye.svg")
    img.setAttribute(
      "alt",
      "Imagem que simboliza que o input de senha está escondido"
    )
    inputPassword.setAttribute("type", "password")
  }
})

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault()

  if (inputEmail.value === "" && inputPassword.value === "") {
    timeOfElementsOnScreen()
  }

  if(inputPassword.value != "" && inputEmail.value === "") {
    timeOfElementOnScreenEmail()
  }

  if(inputEmail.value != "" && inputPassword.value === "") {
    timeOfElementOnScreenPassword()
  }

  if(validPassword && validEmail) {
    messages.style.display = "block"
    timeOfElementOnScreenMessage();
    inputEmail.value = "";
    inputPassword.value = "";
    validPassword = false;
    validEmail = false;
    validation[0].style.color = "#f8fafc"
    validation[1].style.color = "#f8fafc"
  }
  
})

inputPassword.addEventListener("input", () => {
  let textoDigitado = inputPassword.value

  if (textoDigitado.length == 0) {
    validation[1].style.color = "#f8fafc"
    validPassword = false;
  }

  if(textoDigitado.length >= 1 && textoDigitado.length < 6) {
    validation[1].textContent = "Digite uma senha segura"
    validation[1].style.color = "#ed3a5a"
    validPassword = false;
  }

  if (textoDigitado.length >= 6) {
    validation[1].textContent = "Digite uma senha mais segura"
    validation[1].style.color = "#F0AD05"
    validPassword = false;
  }

  if (textoDigitado.length >= 10) {
    validation[1].textContent = "Senha segura"
    validation[1].style.color = "#68F047"
    validPassword = true;
  }
})

inputEmail.addEventListener("input", () => {
  let valorDigitado = inputEmail.value

  let regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g")

  let validateRegex = regex.test(valorDigitado)

  if(validateRegex) {
    validation[0].textContent = "E-mail validado"
    validation[0].style.color = "#68F047"
    validEmail = true;
  } else {
    validation[0].textContent = "Digite um e-mail válido"
    validation[0].style.color = "#ed3a5a"
    validEmail = false;
  }

  if (valorDigitado.length == 0) {
    validation[0].style.color = "#f8fafc"
    validEmail = false;
  }

})

function timeOfElementOnScreenEmail() {
  validation[0].style.color = "#ed3a5a"

  setTimeout(() => {
    validation[0].style.color = "#f8fafc"
  }, 2000)
}

function timeOfElementOnScreenPassword() {
  validation[1].style.color = "#ed3a5a"

  setTimeout(() => {
    validation[1].style.color = "#f8fafc"
  }, 2000)
}

function timeOfElementOnScreenMessage() {

  setTimeout(() => {
    messages.style.display = "none"
  }, 2000)
}

function timeOfElementsOnScreen() {

  validation[0].style.color = "#ed3a5a"
  validation[1].style.color = "#ed3a5a"
  inputEmail.style.borderColor = "#ed3a5a"
  inputPassword.style.borderColor = "#ed3a5a"

  setTimeout(() => {
    validation[0].style.color = "#f8fafc"
    validation[1].style.color = "#f8fafc"
    inputEmail.style.borderColor = "#e2e8f0"
    inputPassword.style.borderColor = "#e2e8f0"
  }, 2000)
}
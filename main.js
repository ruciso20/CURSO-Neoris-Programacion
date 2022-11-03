/* esto de la validacion lo entendi pero lo extraje de stack overflow */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// esto lo que hace es que si pones algo vacio te ponga que esta mal

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "El nombre de usuario no puede estar en blanco!");
  engine(email, 1, "El mail no puede estar en blanco!");
  engine(password, 2, "La contraseña no puede estar en blanco!");
});

// engine function que muestra la parte de error

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // iconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // iconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

/* para el pdf */
/* jspdf port */
var document = new jsPDF();

/* no es una copia 100 fiel ya que con el canvas ya que va interpretando todo lo que tiene
y va sacando de ahi todo al PDF, por lo que en algunos casos puede fallar */

document.addEventListener("DOMContentLoaded", () => {
  const $boton = document.querySelector("#btnCrearPdf");
  $boton.addEventListener("click", () => {
      const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM, co
      html2pdf()
          .set({
              margin: 1,
              filename: 'documento.pdf',
              image: {
                  type: 'jpeg',
                  quality: 0.98
              },
              html2canvas: {
                  scale: 3, // A mayor escala, mejores gráficos, pero más peso
                  letterRendering: true,
              },
              jsPDF: {
                  unit: "in",
                  format: "a4",
                  orientation: 'portrait' // landscape o portrait, esto sera como se pone en la hoja
              }
          })
          .from($elementoParaConvertir)
          .save()
          .catch(err => console.log(err));
  });
});
    /* como queremos que capture todo el documento ponemoes que sea document.body para que abarque todo */
    /* intente hacer lo del PDF como se ve en el codigo pero nunca termino de funcionar
    y jamas pude obtener la respuesta, espero que si viendo el codigo me pueden ayudar! */
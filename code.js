const textArea = document.querySelector(".input-padron");
const mensaje = document.querySelector(".mensaje-copiado");

function btn_encript(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}

function btn_desencript(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}

navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
      console.log(result.state)
    }
  });

  function updateClipboard(newClip) {
    navigator.clipboard.writeText(mensaje.value).then(() => {
        console.log("Texto escrito");
        /* clipboard successfully set */
    })
    .catch(error => {
        console.log(`Ocurrió un error: ${error}`)
        /* clipboard write failed */
    });
  }

function encriptar(stringEncriptada){
    let matriz_codigo = [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]]

    stringEncriptada = stringEncriptada.toLowerCase()

    for (let x = 0; x < matriz_codigo.length; x++){
        if (stringEncriptada.includes(matriz_codigo[x][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz_codigo[x][0],matriz_codigo[x][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matriz_codigo = [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]]

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let x = 0; x < matriz_codigo.length; x++){
        if (stringDesencriptada.includes(matriz_codigo[x][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz_codigo[x][1],matriz_codigo[x][0])
        }
    }
    return stringDesencriptada
}
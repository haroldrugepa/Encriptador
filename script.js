function encriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").innerText = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").innerText = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text").innerText;
    navigator.clipboard.writeText(texto)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(() => alert("Error al copiar el texto"));
}

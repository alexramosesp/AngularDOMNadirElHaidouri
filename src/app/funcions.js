export function yellowSubmarine(id) {
  let etiqueta = document.getElementById(id);
  etiqueta.innerHtml = etiqueta.style.color = "yellow";
}
export function changeSize() {
  let etiqueta2 = document.getElementsByTagName("table");
  for (const etiqueta of etiqueta2) {
    etiqueta.innerHtml = etiqueta.style.border = 1+"px solid black";
    etiqueta.innerHtml = etiqueta.style.width = 100+"px";
    etiqueta.innerHtml = etiqueta.style.height = 100+"px";
  }
}

export function countWords(parrafContar, parrafSortida) {
  let i = 0
  let paragraf = document.getElementById(parrafContar);
  paragraf = paragraf.innerHTML.toString().split(" ")
  for (const paraula in paragraf) {
    i++
  }
  let sortida = document.getElementById(parrafSortida)
  sortida.innerHTML = "El paragraf té " + i + " paraules.";
}

export function addImage() {
  let imatge = document.getElementById('imatgedom');
  imatge.src = "../../assets/imatge.jpg"
  imatge = imatge.style.width = 100+"px"
}

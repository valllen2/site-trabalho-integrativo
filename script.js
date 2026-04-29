
function mostrarMais(id) {
  const elemento = document.getElementById(id);
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}


document.querySelectorAll('a[href^="#"]').forEach(ancora => {
  ancora.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animado");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(secao => {
  secao.classList.add("escondido-js");
  observer.observe(secao);
});


const botao = document.querySelector("button");
if (botao) {
  botao.addEventListener("click", () => {
    botao.classList.toggle("clicado");
  });
}

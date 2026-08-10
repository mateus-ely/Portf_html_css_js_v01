const lista = document.getElementById("minha-lista");
const botao = document.getElementById("btSubmit");
const ultprod = document.getElementById("produto-destaque");
const darkModeToggle = document.getElementById("btdark")

botao.addEventListener("click", function (event) {
  event.preventDefault();

  const nome =
    document.getElementById("prodn").value +
    " - " +
    document.getElementById("prodc").value +
    " - " +
    document.getElementById("prodp").value;

  novoItem = document.createElement("li");
  novoItem.textContent = nome;
  ultprod.textContent = nome;

  lista.appendChild(novoItem);
  console.log(nome);
}
);

darkModeToggle.addEventListener("click", function (event) {
  event.preventDefault();
   document.body.classList.toggle("dark-mode");
}
);
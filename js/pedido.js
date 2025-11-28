let total = 0;
let itens = [];

function adicionar(nome, preco, imgUrl) {
	const novoItem = {
		id: Date.now(),
		nome: nome,
		preco: preco,
		img: imgUrl,
	};
	itens.push(novoItem);

	renderizarCarrinho();
}

function remover(idRemover) {
	itens = itens.filter((item) => item.id !== idRemover);
	renderizarCarrinho();
}

function renderizarCarrinho() {
	const listaUl = document.getElementById("lista-carrinho");
	const totalSpan = document.getElementById("total-valor");

	listaUl.innerHTML = "";
	total = 0;

	if (itens.length === 0) {
		listaUl.innerHTML =
			'<li type="none" id="msg-vazio">Seu carrinho está vazio...</li>';
		totalSpan.innerText = "0.00";
		return;
	}

	itens.forEach((item) => {
		total += item.preco;

		const li = document.createElement("li");
		li.className = "item-carrinho";
		li.innerHTML = `
            <div class="info-item">
                <img src="${item.img}" alt="img">
                <span>${item.nome}</span>
            </div>
            <div class="acoes-item">
                <span>R$ ${item.preco.toFixed(2)}</span>
                <button class="btn-remove" onclick="remover(${
					item.id
				})">🗑️</button>
            </div>
        `;
		listaUl.appendChild(li);
	});

	totalSpan.innerText = total.toFixed(2);
}

function finalizarPedido() {
	if (itens.length === 0) {
		alert("Erro: Não é possível finalizar um pedido vazio!");
	} else {
		alert(
			`Sucesso! Pedido finalizado.\nTotal a pagar: R$ ${total.toFixed(
				2,
			)}`,
		);
		itens = [];
		renderizarCarrinho();
	}
}


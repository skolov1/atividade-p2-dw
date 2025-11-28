document
	.getElementById("formLogin")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const usuarioInput = document
			.getElementById("usuario")
			.value.trim()
			.toLowerCase();
		const senhaInput = document.getElementById("senha").value.trim();

		if (usuarioInput === "" || senhaInput === "") {
			alert("Ops! Você precisa preencher usuário e senha.");
			return;
		}

		const alunos = [
			{ nome: "gabriel", matricula: "12345" },
			{ nome: "matheus", matricula: "67890" },
		];

		const loginValido = alunos.some(
			(aluno) =>
				aluno.nome === usuarioInput && aluno.matricula === senhaInput,
		);

		if (loginValido) {
			window.location.href = "carrinho.html";
		} else {
			alert("Dados incorretos! Use seu primeiro nome e matrícula.");
		}
	});


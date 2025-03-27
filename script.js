document.getElementById("group-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let names = [];
    document.querySelectorAll("input[name='name']").forEach(input => {
        if (input.value.trim() !== "") {
            names.push(input.value.trim());
        }
    });

    let message = document.querySelector("textarea[name='message']").value.trim();

    if (names.length === 0 || message === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let data = { names, message };

    try {
        let response = await fetch("https://fsdt-contact.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("group-form").reset(); // Limpa os campos
        } else {
            alert("Erro ao enviar o formulário. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
    }
});

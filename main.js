function relogio() {
    var img = document.getElementById("imagem");

    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");

    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora} : ${formatoMinutos} : ${formatoSegundos}`;

    const frase = document.querySelector('.frase')
    //Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if (formatoHora >= 00 && formatoHora < 12) {
        document.body.style.backgroundImage = 'url(https://images2.alphacoders.com/791/thumb-1920-791125.png)'
        document.body.style.color = '#fff'
        img.src = "https://o.remove.bg/downloads/0d686ada-6781-4ef7-99d2-d105b35e99eb/png-transparent-minecraft-pocket-edition-minecraft-story-mode-weapon-sword-diamond-birthday-s-angle-rectangle-video-game-removebg-preview.png"
    }
    else if (formatoHora >= 12 && formatoHora < 18) {
        document.body.style.backgroundImage = 'url(https://rare-gallery.com/uploads/posts/1103109-sunlight-video-games-sunset-sea-night-reflection-sky-sunrise-Minecraft-evening-morning-Sun-horizon-dusk-shaders-cloud-dawn-afterglow.jpg)'
        document.body.style.color = '#fff'
        img.src = "https://o.remove.bg/downloads/0d686ada-6781-4ef7-99d2-d105b35e99eb/png-transparent-minecraft-pocket-edition-minecraft-story-mode-weapon-sword-diamond-birthday-s-angle-rectangle-video-game-removebg-preview.png"
    }
    else {
        document.body.style.backgroundImage = 'url(https://i.redd.it/jv8qdoou2wzy.png)'
        document.body.style.color = '#fff'
        document.body.style.backgroundSize = 'cover'
        img.src = "https://o.remove.bg/downloads/0d686ada-6781-4ef7-99d2-d105b35e99eb/png-transparent-minecraft-pocket-edition-minecraft-story-mode-weapon-sword-diamond-birthday-s-angle-rectangle-video-game-removebg-preview.png"
    }

}


setInterval(relogio, 1000)
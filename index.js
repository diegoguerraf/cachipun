function obtenerJugadaMaquina() {
    const opciones = ["piedra", "papel", "tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        return "empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
    ) {
        return "Usuario";
    } else {
        return "Computadora";
    }
}

function jugarCachipun() {
    let continuar = true;
    let totalJuegos = 0;
    let victoriasUsuario = 0;
    let victoriasComputadora = 0;
    let empates = 0;

    while (continuar) {
        victoriasUsuario = 0;
        victoriasComputadora = 0;
        empates = 0;
        
        const veces = parseInt(prompt("¿Cuántas veces desea jugar?"));
        totalJuegos += veces;
        
        for (let i = 0; i < veces; i++) {
            const jugadaUsuario = prompt("Ingrese su jugada (piedra, papel o tijera):").trim().toLowerCase();
            
            if (["piedra", "papel", "tijera"].includes(jugadaUsuario)) {
                const jugadaMaquina = obtenerJugadaMaquina();
                const resultado = determinarGanador(jugadaUsuario, jugadaMaquina);
                
                let mensaje = `Partida ${i + 1}: Usted jugó ${jugadaUsuario}. La máquina jugó ${jugadaMaquina}. `;
                if (resultado === "Usuario") {
                    mensaje += "¡Felicidades! Usted ha ganado esta partida.";
                    victoriasUsuario++;
                } else if (resultado === "Computadora") {
                    mensaje += "Lo siento, ha perdido contra la máquina.";
                    victoriasComputadora++;
                } else {
                    mensaje += "Ha sido un empate.";
                    empates++;
                }
                alert(mensaje);
            } else {
                alert("Partida inválida. Por favor, ingrese Piedra, Papel o Tijera.");
                i--; 
            }
        }

        alert(`Juegos completados. Total de victorias del usuario: ${victoriasUsuario}. Total de victorias de la computadora: ${victoriasComputadora}. Total de empates: ${empates}.`);

        let mensajeFinal = "";
        if (victoriasUsuario > victoriasComputadora) {
            mensajeFinal = "¡Felicidades! Usted ha ganado más rondas en total.";
        } else if (victoriasUsuario < victoriasComputadora) {
            mensajeFinal = "Lo siento, ha perdido más rondas en total.";
        } else {
            mensajeFinal = "Sigue intentándolo, ha habido un empate en el total de rondas.";
        }
        
        alert(mensajeFinal);
        
        const continuarJugando = confirm("¿Desea jugar nuevamente?");
        if (!continuarJugando) {
            continuar = false;
        }
    }
}

jugarCachipun();




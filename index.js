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
    while (continuar) {
        const veces = parseInt(prompt("¿Cuántas veces desea jugar?"));
        for (let i = 0; i < veces; i++) {
            const jugadaUsuario = prompt("Ingrese su jugada (piedra, papel o tijera):").trim().toLowerCase();
            
            if (["piedra", "papel", "tijera"].includes(jugadaUsuario)) {
                const jugadaMaquina = obtenerJugadaMaquina();
                const resultado = determinarGanador(jugadaUsuario, jugadaMaquina);
                
                let mensaje = `Partida ${i + 1}: Usted jugó ${jugadaUsuario}. La máquina jugó ${jugadaMaquina}. `;
                if (resultado === "Usuario") {
                    mensaje += "¡Felicidades! Usted ha ganado esta partida.";
                } else if (resultado === "Computadora") {
                    mensaje += "Lo siento, ha perdido contra la máquina.";
                } else {
                    mensaje += "Ha sido un empate.";
                }
                alert(mensaje);
            } else {
                alert("Partida inválida. Por favor, ingrese Piedra, Papel o Tijera.");
                i--; 
            }
        }
    }
}

jugarCachipun();

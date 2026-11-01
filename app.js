const button = document.querySelector("esp-web-install-button");
const statusLine = document.querySelector("#flash-status");

button?.addEventListener("state-changed", (event) => {
  const state = event.detail;
  const messages = {
    initializing: "Preparando la conexión USB…",
    manifest: "Comprobando el firmware…",
    preparing: "Preparando el dispositivo…",
    erasing: "Borrando el firmware anterior…",
    writing: `Instalando Apex… ${state.details?.percentage ?? 0}%`,
    finished: "¡Apex se ha instalado correctamente! Ya puedes desconectar la placa.",
    error: "No se pudo completar la instalación. Comprueba el cable y vuelve a intentarlo.",
  };
  statusLine.textContent = messages[state.state] ?? "";
});

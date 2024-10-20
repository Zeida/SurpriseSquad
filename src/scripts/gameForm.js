<script>
  document.addEventListener("DOMContentLoaded", function () {
    const addPlayerBtn = document.querySelector(".add-player");
    const playerInputsContainer = document.querySelector(".player-inputs");

    addPlayerBtn.addEventListener("click", function () {
      const newPlayerIndex = playerInputsContainer.children.length / 2 + 1; // Index based on number of players
      const newPlayerHTML = `
        <label for="player${newPlayerIndex}-name">Nombre del jugador ${newPlayerIndex}:</label>
        <input type="text" id="player${newPlayerIndex}-name" name="player${newPlayerIndex}-name" required />
        <label for="player${newPlayerIndex}-email">Email del jugador ${newPlayerIndex}:</label>
        <input type="email" id="player${newPlayerIndex}-email" name="player${newPlayerIndex}-email" required />
      `;
      playerInputsContainer.insertAdjacentHTML("beforeend", newPlayerHTML);
    });
  });
</script>

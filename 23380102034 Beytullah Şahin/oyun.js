
function moveDiv() {
    const gameContainer = document.getElementById("game");
    const movingDiv = document.getElementById("movingDiv");

    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    const newX = Math.random() * (containerWidth - movingDiv.offsetWidth);
    const newY = Math.random() * (containerHeight - movingDiv.offsetHeight);

    movingDiv.style.left = `${newX}px`;
    movingDiv.style.top = `${newY}px`;
}

document.getElementById("movingDiv").addEventListener("mouseover", moveDiv);

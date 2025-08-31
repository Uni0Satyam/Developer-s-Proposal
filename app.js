const btn1 = document.querySelector("#yes");
const btn2 = document.querySelector("#no");
const message = document.querySelector("#message");


btn1.addEventListener("click", () => {
    message.innerHTML = "Knew it! 🥰 <b>love you<b/> too ❤️";
    for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Random horizontal position across screen
    heart.style.left = Math.random() * window.innerWidth + "px";
    // Start near the bottom
    heart.style.top = window.innerHeight - 50 + "px";
    // Random size
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    const driftX = (Math.random() * 200 - 100) + "px";
    heart.style.setProperty("--drift-x", driftX);

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
});

btn2.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    btn2.style.transform = `translate(${x}px,${y}px)`;
})
btn2.addEventListener("click", () => {
    message.textContent = "You clicked No... but my heart says Yes ❤️";
})
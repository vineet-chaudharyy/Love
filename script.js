const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#ffe6f0;
            font-family:Arial;
        ">
            <h1 style="color:#ff4081;">I love you too ❤️😍</h1>
            <img src="https://i.imgur.com/7yUvePI.png" width="250">
        </div>
    `;
});

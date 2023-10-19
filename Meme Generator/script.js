const memeBtn = document.querySelector(".btn");
let img = document.querySelector(".meme-img");

const randomMemeGenerator = async function () {
  let res = await fetch("https://meme-api.com/gimme");

  let json = await res.json();

  let url = json.url;

  img.src = url;
};

memeBtn.addEventListener("click", randomMemeGenerator);

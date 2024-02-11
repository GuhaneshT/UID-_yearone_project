let word = document.querySelectorAll(".w");
let l = word.length;

setInterval(function () {
  let r = Math.trunc(Math.random() * l);
  word[r].style.color = "rgb(231, 199, 84)";
}, 1000);

let lady = document.querySelector(".movinglad");

lady.addEventListener("mouseover", function () {
  lady.src = "Frame 1.gif";
});
lady.addEventListener("mouseout", function () {
  lady.src = "ffff.png";
});
let cursor = document.querySelector(".cursor");
let page = document.querySelector(".page");
page.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});

let button = document.querySelector("#btn");
let magic = document.querySelector(".magic");

function peyar(x) {
  let a = x.split("/");
  return a[4];
}
var link = [
  "https://artsandculture.google.com/entity/juan-gris/m0435m?categoryId=artist",
  "https://artsandculture.google.com/entity/leonardo-da-vinci/m04lg6?categoryId=artist",
  "https://artsandculture.google.com/entity/alfred-sisley/m01qpyr?categoryId=artist",
  "https://artsandculture.google.com/entity/johannes-vermeer/m0bw2x?categoryId=artist",
  "https://artsandculture.google.com/entity/yoshitoshi/m01rtn7?categoryId=artist",
  "https://artsandculture.google.com/entity/berthe-morisot/m01cct?categoryId=artist",
  "https://artsandculture.google.com/entity/gordon-parks/m02t_dy?categoryId=artist",
  "https://artsandculture.google.com/entity/guercino/m013p84?categoryId=artist",
  "https://artsandculture.google.com/entity/amrita-sher-gil/m09sphm?categoryId=artist",
  "https://artsandculture.google.com/entity/dong-qichang/m085gvb?categoryId=artist",
  "https://artsandculture.google.com/entity/hieronymus-bosch/m0cdn_?categoryId=artist",
  "https://artsandculture.google.com/entity/zhang-xiaogang/m0chn1c?categoryId=artist",
  "https://artsandculture.google.com/entity/hendrick-goltzius/m03fzzx?categoryId=artist",
  "https://artsandculture.google.com/entity/emperor-huizong-of-song/m02wmh9?categoryId=artist",
  "https://artsandculture.google.com/entity/xu-bing/m02zrrb?categoryId=artist",
  "https://artsandculture.google.com/entity/toyohara-kunichika/m0b1jnw?categoryId=artist",

  "https://artsandculture.google.com/entity/giuseppe-arcimboldo/m030b1q?categoryId=artist",
];
let m = [];

for (let i = 0; i < link.length; i++) {
  m[i] = peyar(link[i]);
}
let artsman;
function randomArtist() {
  let r = Math.trunc(Math.random() * link.length);
  artsman = Number(r);

  return m[r];
}

button.addEventListener("click", function () {
  let artist = String(randomArtist());
  magic.innerHTML = ` ${artist.toUpperCase()} `;
});

magic.addEventListener("click", function () {
  open(link[artsman]);
});

// var star_1 = ;
// if (document.querySelector(".star1").checked) console.log("bababoi");
// else console.log("not bababoi");

// console.log(document.querySelectorAll("input[type=radio]:checked"));
// var cardo = document.querySelector("#c1");
// var cardt = document.querySelector(".card1-body");
// var cardth = document.querySelector(".card2-body");
// var cardf = document.querySelector(".card3-body");
// cardo.addEventListener("click", function () {
//   c1.href = "vincent_arts.html";
// });

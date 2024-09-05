const tUbahWarna = document.getElementById("ubah-warna");
const area = document.querySelector(".area");
//   membuat button apply
let aksi = document.querySelector(".aksi");
let img = document.querySelector("img");
applyWarna = document.createElement("button");
const textArea = document.createTextNode("apply");
applyWarna.appendChild(textArea);
applyWarna.setAttribute("id", "apply-warna");
applyWarna.setAttribute("type", "button");

aksi.insertBefore(applyWarna, img);

function tombolApplyWarna(color) {
  document.body.style.backgroundColor = color;
}

//   jika tombol hapus diklik akan menghapus warnanya
const tHapus = document.querySelector(".tHapus");
tHapus.addEventListener("click", function () {
  document.body.style.backgroundColor = "";
});

tUbahWarna.addEventListener("click", function () {
  area.style.backgroundColor = "lightgreen";

  //   jika tombol apply di klik akan mengubah warna body
  applyWarna.addEventListener("click", function () {
    tombolApplyWarna("lightgreen");
  });
});

const tWarnaRandom = document.getElementById("warna-random");

tWarnaRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  area.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");

// sMerah.addEventListener("input", function () {
//   let r = sMerah.value;
//   let g = sHijau.value;
//   let b = sBiru.value;
//   area.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sHijau.addEventListener("input", function () {
//   let r = sMerah.value;
//   let g = sHijau.value;
//   let b = sBiru.value;
//   area.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
// sBiru.addEventListener("input", function () {
//   let r = sMerah.value;
//   let g = sHijau.value;
//   let b = sBiru.value;
//   area.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// cara lebih efektif
const input = document.querySelectorAll("input[type=range]");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function () {
    let color = `${input[0].value},${input[1].value},${input[2].value}`;
    area.style.backgroundColor = `rgb(${color})`;

    //   jika tombol apply di klik akan mengubah warna body
    applyWarna.addEventListener("click", function () {
      tombolApplyWarna(`rgb(${color})`);
    });
  });
}

document.body.addEventListener("mousemove", function (e) {
  sumbuX = Math.round((e.clientX / innerWidth) * 255);
  sumbuY = Math.round((e.clientY / innerHeight) * 255);
  let b = Math.round(Math.random() * 255 + 1);
  let color = `rgb(${sumbuX},${sumbuY},${b})`;
  area.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
});

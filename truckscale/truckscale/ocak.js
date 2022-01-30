const plakaListesi = [];
const darabaListesi = [];
const ucretListesi = [];
const netAgirlikListesi = [];

const liste = document.querySelector(".liste");
document.querySelector(".ekle1").onclick = function () {
  const giris1 = document.querySelector(".form1");

  liste.innerHTML = liste.innerHTML + `<li>${giris1.value}</li>`;

  plakaListesi.push(giris1.value);
  giris1.value = "";
};
console.log(plakaListesi);

const listed = document.querySelector(".listed");
document.querySelector(".ekle2").onclick = function () {
  const giris2 = document.querySelector(".form2");

  listed.innerHTML = listed.innerHTML + `<li>${giris2.value} ton</li>`;
  darabaListesi.push(giris2.value);
  giris2.value = "";
};
console.log(darabaListesi);

let hesapla = (document.querySelector(".hesapla").onclick = function () {
  if (document.getElementById("kum").checked) {
    for (let i = 0; i < plakaListesi.length; i++) {
      let secilenPlaka = document.querySelector(".form3").value;
      let toplamAgirlik = document.querySelector(".form4").value;

      if (secilenPlaka == plakaListesi[i]) {
        let netAgirlik = toplamAgirlik - darabaListesi[i];
        netAgirlikListesi.push(netAgirlik);
        document.querySelector(".net").textContent = ` ${netAgirlik} ton`;
        let ucret = netAgirlik * 200;
        ucretListesi.push(ucret);
        document.querySelector(".tutar").textContent = `${ucret} Turk Lirasi`;
      }
    }
  } else if (document.getElementById("cakil").checked) {
    for (let i = 0; i < plakaListesi.length; i++) {
      let secilenPlaka = document.querySelector(".form3").value;
      let toplamAgirlik = document.querySelector(".form4").value;

      if (secilenPlaka == plakaListesi[i]) {
        let netAgirlik = toplamAgirlik - darabaListesi[i];
        netAgirlikListesi.push(netAgirlik);
        document.querySelector(".net").textContent = ` ${netAgirlik} ton`;
        let ucret = netAgirlik * 100;
        ucretListesi.push(ucret);
        document.querySelector(".tutar").textContent = `${ucret} Turk Lirasi`;
      }
    }
  }
  document.querySelector(".plakaNo").textContent =
    document.querySelector(".form3").value;
  let now = new Date();

  document.querySelector(".date").textContent = now;
});
console.log(ucretListesi);
console.log(netAgirlikListesi);

const yazdir1 = document.querySelector(".sutun3");
document.querySelector(".yazdir1").onclick = function () {
  const ayet = document.querySelector(".hud");
  yazdir1.innerHTML =
    yazdir1.innerHTML +
    `${ayet} HUD/84<br />Medyen'e de kardeşleri Şuayb'ı peygamber gönderdik.
  Onlara şöyle dedi: "Ey kavmim! Allah'a kulluk edin; sizin için
  O'ndan başka hiçbir tanrı yoktur. Ölçüyü ve tartıyı eksik
  tutmayın. Ben sizin helâl yoldan kazanmadığınız bol nimetler
  içinde yaşadığınızı görüyorum Böyle giderse, hepinizi azabıyla
  çepeçevre kuşatacak bir günün gelivermesinden sizin adınıza
  korkuyorum."`;
};

let aracSayi = document.querySelector(".aracSayisi");

const icmal = (document.querySelector(".icmal").onclick = function () {
  aracSayi.innerHTML = `${plakaListesi.length} `;

  function myFunction(total, value) {
    return total + value;
  }
  let netAgirlikToplam = netAgirlikListesi.reduce(myFunction);
  document.querySelector(".nettoplam").innerHTML = `${netAgirlikToplam} ton`;
  console.log(netAgirlikListesi.reduce(myFunction));

  function myFunction(total, value) {
    return total + value;
  }
  let ucretToplam = ucretListesi.reduce(myFunction);
  document.querySelector(
    ".tutartoplam"
  ).innerHTML = `${ucretToplam} Turk Lirasi`;
  console.log(ucretListesi.reduce(myFunction));
});

let now = new Date();

document.querySelector(".date1").textContent = now;

const yazdir2 = document.querySelector(".sutun4");
document.querySelector(".yazdir2").onclick = function () {
  const ayet2 = document.querySelector(".enfal");
  yazdir2.innerHTML =
    yazdir2.innerHTML +
    `${ayet2} ENFAL/30<br />(Ey Habîbim!) Bir zaman inkâr edenler seni tutup bağlamak veya seni öldürmek veya seni (yurdundan) çıkarmak için sana tuzak kuruyorlardı. 
    Onlar tuzak kuruyorlardı(ama) Allah da (onlara) tuzak kuruyordu. Allah, tuzak kuranların en hayırlısıdır.`;
};
//https://github.com/onerdogan/Truckscale.git
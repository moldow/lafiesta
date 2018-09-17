//BURGER MENU


function onLoad() {



    function toggleMenu() {
        document.querySelector(".menu-item").classList.toggle("change");
        document.querySelector("nav").classList.toggle("show");
    }
    document.querySelector(".menu-item").addEventListener("click", toggleMenu);
    document.querySelector("ul").addEventListener("click", toggleMenu);

}


document.addEventListener("DOMContentLoaded", function (event) {
    onLoad();
});








let modal = document.querySelector("#modal");
let dest = document.querySelector(".retContainer"),
    retter, menuFilter = "alle";


document.addEventListener("DOMContentLoaded", hentJson);
async function hentJson() {
    let jsonData = await fetch("menu.json");
    retter = await jsonData.json();
    visRetter();
}


document.querySelectorAll(".menu-item").forEach(knap => {
    knap.addEventListener("click", filtrering)
});

function filtrering() {
    dest.textContent = "";
    menuFilter = this.getAttribute("data-kategori");
    visRetter();
}

function visRetter() {

    let temp = document.querySelector(".retTemplate");
    let dest = document.querySelector(".retContainer");




    retter.forEach(ret => {
        if (ret.Katagori == menuFilter || menuFilter == "alle") {
            let klon = temp.cloneNode(true).content;



            klon.querySelector(".data-billede").src = "imgs/billeder/" + ret.billede + "-sm.png";

            klon.querySelector(".data-navn").textContent = ret.navn;

            klon.querySelector(".data-billede").addEventListener("click", () => {
                visModal(ret);
            });


            klon.querySelector(".data-pris").textContent = ret.pris;
            dest.appendChild(klon);

        }
    });
}


function visModal(retter) {

    modal.classList.add("vis");
    modal.querySelector(".modal-navn").textContent = retter.navn;

    modal.querySelector(".modal-billede").src = "imgs/sm-billeder" + retter.billede + "-billeder.png";
    modal.querySelector(".modal-billede").alt = "Foto af" + retter.navn;

    modal.querySelector(".beskrivelse").textContent = retter.beskrivelse;

    modal.querySelector("button").addEventListener("click", skjulModal);
}

function skjulModal() {
    console.log("test");
    modal.classList.remove("vis");
}

$.holdReady(true);

const objetsMangas = [
    {id: 3, img: "./image/1495292642.jpg", name: "inconnu" },
    {id: 4, img: "./image/R (1).jpg", name: "inconnu" },
    {id: 5, img: "./image/R (2).jpg", name: "inconnu" },
    {id: 6, img: "./image/R (3).jpg", name: "inconnu" },
    {id: 7, img: "./image/R (4).jpg", name: "inconnu" },
    {id: 8, img: "./image/R (5).jpg", name: "inconnu" },
    {id: 9, img: "./image/R (6).jpg", name: "inconnu" },
    {id: 10, img: "./image/R (7).jpg", name: "inconnu" },
    {id: 11, img: "./image/R (8).jpg", name: "inconnu" },
    {id: 12, img: "./image/R (9).jpg", name: "inconnu" },
    {id: 13, img: "./image/R (10).jpg", name: "inconnu" },
    {id: 17, img: "./image/R (14).jpg", name: "My hero accadémia" },
    {id: 18, img: "./image/R (15).jpg", name: "My hero accadémia" },
    {id: 19, img: "./image/R (16).jpg", name: "My hero accadémia" },
    {id: 20, img: "./image/R (17).jpg", name: "Bleach" },
    {id: 21, img: "./image/R (18).jpg", name: "Bleach" },
    {id: 22, img: "./image/thumb-1920-1038723.jpg", name: "One " },
    {id: 25, img: "./image/R.jpg", name: "Inconnu " },
]

let value ="" ;
let input = document.getElementById("input");
let main = document.querySelector('.marketing');
let block;

input.addEventListener("input", (e) => {
    value = e.target.value
    let Regex = new RegExp(value,'i'); // 'i' = no casse (no care maj) 
    let hide = getValue(Regex) //hide = bool
    if(hide&&value!==""){  //si hide est true et  si value est vide 
        main.style.display = "none" 
    }else if(hide){
        main.style.display = "block"
    }else{
        main.style.display = "block"
    }
})

function getValue(Regex){
    let bool = false; //bool sert a dire quand j ai ecrit un truc qui est dans la bdd
    for (  manga of objetsMangas) {

            let blockName =  document.querySelectorAll(".col-md-4 div img");
            block = document.querySelectorAll(".col-md-4");

            for (let i = 0; i < blockName.length; i++) { 
                if ( !Regex.test(blockName[i].alt)) { //si la valeur de regex est pas contenue dans un des alt de img 
                    block[i].style.display ="none";
                }else{
                    block[i].style.display ="block"; //la valeur de regex est contenue dans un des alt de img
                    bool = true; 
                }
            }
      }
      return bool;

}


function subscriptionPopup(){
    const popup = $('#popup');

    popup.show();

    $(".close").on('click',function(){
        popup.hide();
    });
}

$.holdReady(false);
$(document).ready(function() {
    let imagesDiv = objetsMangas.map(image => {
        return `
            <div class="col-md-4 article" style="margin: 2rem 0;">
                <div class="card mb-4 shadow-sm h-100">
                    <img class="card-img-top" alt="${image.name}" src="${image.img}" style="width: 100%; height: 15vw; object-fit: cover;">
                    <div class="card-body">
                    <p class="card-text">${
            image.description ? image.description : 'Description en travaux !'
        }</p>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Voir l'article</button>
                </div>
            </div>
        `
    })
    $("#imagesAlbum").append(imagesDiv);

    setTimeout( function() {
        subscriptionPopup();
    },10000);
});

$('.img-parallax').each(function(){
    const img = $(this);
    const imgParent = $(this).parent();

    function parallaxImg () {
        let speed = img.data('speed');
        let imgY = imgParent.offset().top;
        let winY = $(this).scrollTop();
        let winH = $(this).height();
        let parentH = imgParent.innerHeight();

        let winBottom = winY + winH;

        if (winBottom > imgY && winY < imgY + parentH) {
            let imgBottom = ((winBottom - imgY) * speed);
            let imgTop = winH + parentH;
            let imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            img.css({
                top: imgPercent + '%',
                transform: 'translate(-50%, -' + imgPercent + '%)'
            })
        }
    }
    $(document).on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});


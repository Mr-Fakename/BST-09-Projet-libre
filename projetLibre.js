$.holdReady(true);

const objetsMangas = [
    {id: 1, img: "./image/4c6ee25042b014561effb42bad9269a9.jpg", name: "Boruto", description : "Boruto est le fils aîné de Naruto et d' Hinata. Il est également le grand frère d' Himawari, qu'il adore. Il fait équipe avec Sarada et Mitsuki. Son professeur est Konohamaru." },
    {id: 2, img: "./image/1008181.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
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
    {id: 14, img: "./image/R (11).jpg", name: "Dbz", description: "Dragon Ball Z, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise d' Akira Toriyama et produite par la Toei Animation. Il s'agit de la suite de Dragon Ball." },
    {id: 15, img: "./image/R (12).jpg", name: "Dbz", description: "Dragon Ball Z, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise d' Akira Toriyama et produite par la Toei Animation. Il s'agit de la suite de Dragon Ball." },
    {id: 16, img: "./image/R (13).jpg", name: "Boruto", description : "Boruto est le fils aîné de Naruto et d' Hinata. Il est également le grand frère d' Himawari, qu'il adore. Il fait équipe avec Sarada et Mitsuki. Son professeur est Konohamaru." },
    {id: 17, img: "./image/R (14).jpg", name: "My hero accadémia" },
    {id: 18, img: "./image/R (15).jpg", name: "My hero accadémia" },
    {id: 19, img: "./image/R (16).jpg", name: "My hero accadémia" },
    {id: 20, img: "./image/R (17).jpg", name: "Bleach" },
    {id: 21, img: "./image/R (18).jpg", name: "Bleach" },
    {id: 22, img: "./image/thumb-1920-1038723.jpg", name: "One " },
    {id: 23, img: "./image/wallpapersden.com_one-piece-team-art_2560x1080.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
    {id: 24, img: "./image/wallpapersden.com_one-piece-team-art_2560x1080.jpg", name: "One pièce", description: "One Piece est un manga japonais écrit et illustré par Eiichiro Oda. Il est publié en feuilleton dans le magazine de manga shōnen de Shueisha Weekly Shōnen Jump depuis juillet 1997, avec ses chapitres individuels compilés en 99 volumes tankōbon en juin 2021." },
    {id: 25, img: "./image/R.jpg", name: "Inconnu " },
]

let id ;
let value ="" ;
let input = document.getElementById("input");
let main = document.querySelector('.marketing');
let block;

$.holdReady(false);
$( document ).ready(function() {
    let imagesDiv = objetsMangas.map(image => {
        return `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" alt="${image.name}" src="${image.img}">
                    <div class="card-body">
                    <p class="card-text">${
                            image.description ? image.description : 'Pas de description à afficher'
                        }</p>
                    
                </div>
            </div>
        `
    })
    $( "#imagesAlbum" ).append(imagesDiv);
}); 

//<button type="button" class="btn btn-sm btn-outline-secondary">Voir l'article</button> // si on veut le re mettre c est ligne 48


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

function hello world(){
    console.log("hello");
}

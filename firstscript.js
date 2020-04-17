let data = {
    photo : [ './images/thai1.jpg' , './images/thai2.jpg' , './images/thai3.jpg' , './images/thai4.jpg' , './images/thai5.jpg' , './images/thai6.jpg' ],
    title : ['1.' , '2.', '3.' , '4.' , '5.' , '6.'],
    description : ['Thaiföld lakossága közel 69,7 milliós (2020-as becslés)), a fővárosa Bangkok. 30 napot nem meghaladó, turista célú utazás esetén a magyar állampolgároknak nem kell vízum Thaiföldre!' ,
     ' Kötelező oltás nincs előírva thaiföldi utazáshoz. Thaiföldön a higiéniai viszonyok jók. Sokkal modernebb ország, mint azt sok magyar utazó első látogatása előtt elképzeli.' ,
      'Észak-déli irányban hosszan elnyúló ország lévén egész Thaiföldre nézve nehéz megmondani azt, hogy mi az odautazás optimális időzítése. Függ a válasz attól, hogy a thaiföldi utazás során hová utazunk és milyen céllal. ',
      'Európából a legtöbben éppen a főszezon idején (december-február) utaznak Thaiföldre, részben a téli hidegből való menekülés okán, másrészt, mert ezekben a hónapokban a klíma kevésbé csapadékos, és nincs durva hőség. ',
      'Mert bizony a március és május közötti időszak egész Thaiföldön túlságosan is meleg a mi hazai éghajlathoz szokott szervezetünknek. Június-augusztus is jó időszak Thaiföld meglátogatásához. Szeptemberben és októberben sok az eső.' ,
      'A tengerparti nyaralás szempontjából nem árt tudni, hogy ugyanabban a hónapban más a csapadékosság a nyugai Andaman-tengeren lévő oldalon (Phket, Phi Phi, Krabi stb.) és más a keleti Thai (Sziámi)-öböl oldalon (Ko Samui, Ko Phangan stb.)'
    ]
      
};

let img = document.getElementById('PictureContainer');
let title = document.getElementById('Title');
let description = document.getElementById('description');
let curentPhoto = 0 ;
let next = document.getElementById('Next');
let back = document.getElementById('Back');
let thumbnailContainer = document.getElementById('Thumbnail');
let counter = 0;

data.photo.forEach((i) =>{
    let newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'div'+counter+'');
    newdiv.style.cssText = ('position: relative ; text-align:center; width: 70px; height: 70px; display: inline-block;' );
    let thumbnail = new Image;
    thumbnail.style.cssText = ('object-fit: cover; width :60px; height:60px; box-shadow:  #009966 1px 3px 2px 4px; padding: 2px; border-radius: 2px; position: relative;')
    thumbnail.setAttribute('id', counter);
    let thumbTitle = document.createElement('span');
    thumbTitle.setAttribute('id','thumb-title'+counter+'');
    thumbTitle.innerText = data.title[counter];
    thumbnail.src= i;
    counter++;
    newdiv.appendChild(thumbnail);
    newdiv.appendChild(thumbTitle);
    thumbnailContainer.appendChild(newdiv);
})

let thumb0 = document.getElementById('0');
let thumb1 = document.getElementById('1');
let thumb2 = document.getElementById('2');
let thumb3 = document.getElementById('3');
let thumb4 = document.getElementById('4');
let thumb5 = document.getElementById('5');

function printImage() {
    img.style.backgroundImage = 'url('+data.photo[curentPhoto]+')';
    title.textContent = data.title[curentPhoto];
    description.textContent = data.description[curentPhoto];
  if (curentPhoto === 0) {
      thumb0.style.background =  '#b7f3de';
    }
  else {
      thumb0.style.background = 'inherit' ;
  }
  if (curentPhoto === 1) {
    thumb1.style.background =  '#b7f3de';
  }
else {
    thumb1.style.background = 'inherit' ;
}
if (curentPhoto === 2) {
    thumb2.style.background =  '#b7f3de';
  }
else {
    thumb2.style.background = 'inherit' ;
}
if (curentPhoto === 3) {
    thumb3.style.background =  '#b7f3de';
  }
else {
    thumb3.style.background = 'inherit' ;
}
if (curentPhoto === 4) {
    thumb4.style.background =  '#b7f3de';
  }
else {
    thumb4.style.background = 'inherit' ;
}
if (curentPhoto === 5) {
    thumb5.style.background =  '#b7f3de';
  }
else {
    thumb5.style.background = 'inherit' ;
}

}

printImage();

next.onclick = function() {
    if (curentPhoto === data.photo.length-1) {
        curentPhoto = 0;
        printImage();
    }
    else {
        curentPhoto++;
        printImage();
    }
}

back.onclick = function () {
    if (curentPhoto === 0) {
        curentPhoto = 5;
        printImage();
    }
    else { curentPhoto--;
    printImage();}
}
thumb0.onclick = function() {
    currentPhoto = 0;
    printImage();
}
thumb1.onclick = function() {
    currentPhoto = 1;
    printImage();
}
thumb2.onclick = function() {
    currentPhoto = 2;
    printImage();
}
thumb3.onclick = function() {
    currentPhoto = 3;
    printImage();
}
thumb4.onclick = function() {
    currentPhoto = 4;
    printImage();
}
thumb5.onclick = function() {
    currentPhoto = 5;
    printImage();
}

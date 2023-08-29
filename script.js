/*------------------- Animated Bat by EJ --------------------*/
let batSprite = document.getElementById('bat_sprite');

let batSpriteArray = ["face1.png", "face2.png", "face3.png"];

//Setting user_____________________________________________________;
let up = localStorage.getItem('upKey');
let down = localStorage.getItem('downKey');
let left = localStorage.getItem('leftKey');
let right = localStorage.getItem('rightKey');
let keyActive = localStorage.getItem('activeKey');


//Initialisation du deplacement...
window.addEventListener("keydown", function (event) {

    clearTimeout(this.pauseTime);
    delete this.pauseTime;

    if(keyBoolean){

        switch (event.code) {

             case down:
                batSpriteArray = ["face1.png", "face2.png", "face3.png"];
                this.clearInterval(this.upInterval);
                this.clearInterval(this.leftInterval);
                this.clearInterval(this.rightInterval);
                delete this.upInterval;
                delete this.leftInterval;
                delete this.rightInterval;
                
                if(!this.downInterval){
                    this.downInterval =  setInterval(() =>{moveDown()},50);
                }
                break;

            case up:
                batSpriteArray = ["back1.png", "back2.png", "back3.png"];
                this.clearInterval(this.downInterval);
                this.clearInterval(this.leftInterval);
                this.clearInterval(this.rightInterval);
                delete this.downInterval;
                delete this.leftInterval;
                delete this.rightInterval;

                if(!this.upInterval){
                    this.upInterval =  setInterval(() =>{moveUp()},50);
                }
                break;

            case left:
                batSpriteArray = ["side1.png", "side2.png", "side3.png"];
                batSprite.classList.remove("right");
                batSprite.classList.add("left");
                this.clearInterval(this.upInterval);
                this.clearInterval(this.downInterval);
                this.clearInterval(this.rightInterval);
                delete this.upInterval;
                delete this.downInterval;
                delete this.rightInterval;

                if(!this.leftInterval){
                    this.leftInterval =  setInterval(() =>{moveLeft()},50);
                }
                break;

            case right:
                batSpriteArray = ["side1.png", "side2.png", "side3.png"];
                batSprite.classList.remove("left");
                batSprite.classList.add("right");
                this.clearInterval(this.upInterval);
                this.clearInterval(this.downInterval);
                this.clearInterval(this.leftInterval);
                delete this.upInterval;
                delete this.downInterval;
                delete this.leftInterval;

                if(!this.rightInterval){
                    this.rightInterval =  setInterval(() =>{moveRight()},50);
                }
                break;
        }
    }else{
        this.clearInterval(this.upInterval);
        this.clearInterval(this.downInterval);
        this.clearInterval(this.leftInterval);
        this.clearInterval(this.rightInterval);
    }

});


//Reset deplacement...
window.addEventListener("keyup", function (e) {
    
   //reset position skin...
   if(down && up && left && right){

     this.pauseTime = setTimeout(()=>{
        batSpriteArray = ["face1.png", "face2.png", "face3.png"];

    }, 800);

}

    //refaire switch pour reset seulement la touche relachée...
    switch(e.code){

        case down:
            clearInterval(this.downInterval);
            delete downInterval;
            break;

        case up:
            clearInterval(this.upInterval);
            delete upInterval;
            break;

        case left:
            clearInterval(this.leftInterval);
            delete leftInterval;
            break;

        case right:
            clearInterval(this.rightInterval);
            delete rightInterval;
            break;
    }


});


//---------------------------
const clientHeight = document.body.clientHeight;
const clientWidth = document.body.clientWidth;

function moveDown() {
    if(batSprite.offsetTop >= (clientHeight - 100)){
        batSprite.style.top = batSprite.offsetTop + 0 +'px';
        clearInterval(this.downInterval);
        delete this.downInterval;
    }else{
        batSprite.style.top = batSprite.offsetTop + 20 +'px';
    }
}
function moveUp() {
    if(batSprite.offsetTop <= 0 ){
        batSprite.style.top = batSprite.offsetTop - 0 +'px';
        clearInterval(this.UpInterval);
        delete this.UpInterval;
    }else{
        batSprite.style.top = batSprite.offsetTop - 20 +'px';
    }
}
function moveRight() {
    if(batSprite.offsetLeft >= (clientWidth - 150)){
        batSprite.style.left = batSprite.offsetLeft + 0 +'px';
        clearInterval(this.rightInterval);
        delete this.rightInterval;
    }else{
        batSprite.style.left = batSprite.offsetLeft + 20 +'px';
    }
}
function moveLeft() {
    if(batSprite.offsetLeft <= 0 ){
        batSprite.style.left = batSprite.offsetLeft - 0 +'px';
        clearInterval(this.leftInterval);
        delete this.leftInterval;
    }else{
        batSprite.style.left = batSprite.offsetLeft - 20 +'px';
    }
}

//----------------------------

let i = 0;

function animBatSprite() {

    batSprite.style.backgroundImage = 'url("bat_sprite/'+ batSpriteArray[i] +'")';

    if (i >= 2) {
        i = 0;
    } else {
        i++;
    }
}

function moveWing() {this.cylceWings =  setInterval(animBatSprite, 100);
};
moveWing();

//___________________________________________________Gestion score, vie, overlay______________________________________.
//Score...
let pts = document.getElementById('pts');
let score = 0;
pts.innerText = score;

let coeur = document.getElementById('coeur');
let heartPoint = 3;

//Pts de vie...
function heartCount() {

    coeur.innerText = " ";

    for(let u = 0; u < heartPoint; u++){

        const heart = document.createElement('img');
        heart.src = 'vie/pixel-heart.png';
        heart.style.width = '35px';
        heart.style.height = '35px';
        coeur.appendChild(heart);

    }
}
//Creation Game-over display...
function gameOver() {

    if(!localStorage.getItem('highScore')){
        localStorage.setItem('highScore', score);
    }else{
        if(score > localStorage.getItem('highScore')){
            localStorage.removeItem('highScore');
            localStorage.setItem('highScore', score);
        }
    }

    this.clearInterval(timeInterval);
    this.clearInterval(interFly);
    batSprite.style.display = 'none';
    fly.style.display = 'none';
    owl.style.display = 'none';
    owl2.style.display = 'none';

    const bgDisplayOver = document.createElement('div');
    bgDisplayOver.style.position = 'absolute';
    bgDisplayOver.style.top = '0px';
    bgDisplayOver.style.left = '0px';
    bgDisplayOver.style.zIndex = "10";
    bgDisplayOver.style.display = 'flex';
    bgDisplayOver.style.justifyContent = 'center';
    bgDisplayOver.style.alignItems = 'center';
    bgDisplayOver.style.height = '100vh';
    bgDisplayOver.style.width = '100%';
    bgDisplayOver.style.backgroundColor = 'RGBA(0,0,0,0.40)';

    const displayOver = document.createElement('div');
    displayOver.style.display = 'flex';
    displayOver.style.flexDirection = 'column';
    displayOver.style.justifyContent = 'space-around';
    displayOver.style.alignItems = 'center';
    displayOver.style.height = 'fit-content';
    displayOver.style.paddingBottom = '2rem';
    displayOver.style.width = '33%';
    displayOver.style.border = '3px RGBA(132,0,0, 0.50) solid';
    displayOver.style.backgroundColor = 'rgb(36, 48, 74)';
    displayOver.style.color = 'white';

    const hOver = document.createElement('h1');
    hOver.innerText = 'Game Over';
    hOver.style.fontSize = '5rem';
    hOver.style.marginBottom = '2rem';
    hOver.style.marginTop = '1rem';

    let bestScore = document.createElement('p');
    bestScore.style.fontSize = '2rem';
    bestScore.style.margin = 'auto';
    bestScore.innerHTML = `Meilleur score: ${localStorage.getItem('highScore')}`;

    let aHome = document.createElement('a');
    aHome.setAttribute('href', 'index.html');
    aHome.innerText = 'Retour au menu';

    let pOver = document.createElement('p');
    pOver.style.fontSize = '2.5rem';
    pOver.style.margin = 'auto';
    pOver.innerText = 'La chasse recommence dans: 4';
    displayOver.appendChild(hOver);
    displayOver.appendChild(bestScore);
    displayOver.appendChild(aHome);
    displayOver.appendChild(pOver);
    bgDisplayOver.appendChild(displayOver);
    document.body.appendChild(bgDisplayOver);

    let countDown = 4;
    setInterval(() =>{
        countDown--;
        pOver.innerText = '';
        pOver.innerText = `La chasse recommence dans: ${countDown}`
    },1000)

}

//Crearion pause display...
let keyBoolean = true;


    window.addEventListener('blur', function(){
    if(keyBoolean){
        if(!localStorage.getItem('highScore')){
            localStorage.setItem('highScore', score);
        }else{
            if(score > localStorage.getItem('highScore')){
                localStorage.removeItem('highScore');
                localStorage.setItem('highScore', score);
            }
        }
        keyBoolean = false;
        this.clearInterval(timeInterval);
        this.clearInterval(interOwl);
        this.clearInterval(interOwl2);
        this.clearInterval(interFly);
        this.clearInterval(cylceWings);

        this.bgDisplayPause = document.createElement('div');
        bgDisplayPause.style.position = 'absolute';
        bgDisplayPause.style.top = '0px';
        bgDisplayPause.style.left = '0px';
        bgDisplayPause.style.width = '100%';
        bgDisplayPause.style.height = '100%';
        bgDisplayPause.style.zIndex = '15';
        bgDisplayPause.style.color = 'White';
        bgDisplayPause.style.backgroundColor = 'RGBA(0,0,0,0.40)';

        const displayPause = document.createElement('div');
        displayPause.style.position = 'absolute';
        displayPause.style.display = 'flex';
        displayPause.style.flexDirection = 'column';
        displayPause.style.justifyContent = 'space-around';
        displayPause.style.alignItems = 'center';
        displayPause.style.top = '30%';
        displayPause.style.left = '33%';
        displayPause.style.width = '33%';
        displayPause.style.height = 'fit-content';
        displayPause.style.paddingBottom = '2rem';
        displayPause.style.backgroundColor = 'rgb(36, 48, 74)';
        displayPause.style.border = '3px RGBA(132,0,0, 0.50) solid';

        const hPause = document.createElement('h1');
        hPause.innerText = 'Pause';
        hPause.style.fontSize = '5rem';
        hPause.style.marginBottom = '2rem';
        hPause.style.marginTop = '1rem';

        let bestScore = document.createElement('p');
        bestScore.style.fontSize = '2rem';
        bestScore.style.margin = 'auto';
        bestScore.innerHTML = `Meilleur score: ${localStorage.getItem('highScore')}`;

        let aHome = document.createElement('a');
        aHome.setAttribute('href', 'index.html');
        aHome.innerText = 'Retour au menu';

        const pPause = document.createElement('p');
        pPause.innerText = 'Appuie sur "P" pour relancer';
        pPause.style.fontSize = '2rem';
        pPause.style.margin = 'auto';

        displayPause.appendChild(hPause);
        displayPause.appendChild(bestScore);
        displayPause.appendChild(aHome);
        displayPause.appendChild(pPause);
        bgDisplayPause.appendChild(displayPause);
        document.body.appendChild(bgDisplayPause);
    }
    });

    window.addEventListener('keydown', function(e){
        if(e.code == 'KeyP'){
            if(keyBoolean){
                if(!localStorage.getItem('highScore')){
                    localStorage.setItem('highScore', score);
                }else{
                    if(score > localStorage.getItem('highScore')){
                        localStorage.removeItem('highScore');
                        localStorage.setItem('highScore', score);
                    }
                }
                keyBoolean = false;
                this.clearInterval(timeInterval);
                this.clearInterval(interOwl);
                this.clearInterval(interOwl2);
                this.clearInterval(interFly);
                this.clearInterval(cylceWings);

                this.bgDisplayPause = document.createElement('div');
                bgDisplayPause.style.position = 'absolute';
                bgDisplayPause.style.top = '0px';
                bgDisplayPause.style.left = '0px';
                bgDisplayPause.style.width = '100%';
                bgDisplayPause.style.height = '100%';
                bgDisplayPause.style.zIndex = '15';
                bgDisplayPause.style.color = 'White';
                bgDisplayPause.style.backgroundColor = 'RGBA(0,0,0,0.40)';

                const displayPause = document.createElement('div');
                displayPause.style.position = 'absolute';
                displayPause.style.display = 'flex';
                displayPause.style.flexDirection = 'column';
                displayPause.style.justifyContent = 'space-around';
                displayPause.style.alignItems = 'center';
                displayPause.style.top = '30%';
                displayPause.style.left = '33%';
                displayPause.style.width = '33%';
                displayPause.style.height = 'fit-content';
                displayPause.style.paddingBottom = '2rem';
                displayPause.style.backgroundColor = 'rgb(36, 48, 74)';
                displayPause.style.border = '3px RGBA(132,0,0, 0.50) solid';

                const hPause = document.createElement('h1');
                hPause.innerText = 'Pause';
                hPause.style.fontSize = '5rem';
                hPause.style.marginBottom = '2rem';
                hPause.style.marginTop = '1rem';

                let bestScore = document.createElement('p');
                bestScore.style.fontSize = '2rem';
                bestScore.style.margin = 'auto';
                bestScore.innerHTML = `Meilleur score: ${localStorage.getItem('highScore')}`;

                let aHome = document.createElement('a');
                aHome.setAttribute('href', 'index.html');
                aHome.innerText = 'Retour au menu';

                const pPause = document.createElement('p');
                pPause.innerText = 'Appuie sur "P" pour relancer';
                pPause.style.fontSize = '2rem';
                pPause.style.margin = 'auto';
            
                displayPause.appendChild(hPause);
                displayPause.appendChild(bestScore);
                displayPause.appendChild(aHome);
                displayPause.appendChild(pPause);
                bgDisplayPause.appendChild(displayPause);
                document.body.appendChild(bgDisplayPause);
            }else{
                keyBoolean = true;
                document.body.removeChild(bgDisplayPause);
                displayOwl();
                displayOwl2();
                displayFly();
                moveWing();
                reloadInterTime();
            }
        }
    });

//Timer____...
let timer = document.createElement('p');
timer.style.position = 'absolute';
timer.style.top = '0px';
timer.style.left = '0px';
timer.style.margin = '0px';
timer.style.paddingLeft = '1rem';
timer.style.fontSize = '35px';
timer.style.color = 'White';
timer.style.zIndex = '9';
document.body.appendChild(timer);
let time = 16;
function reloadInterTime() {this.timeInterval = setInterval(() =>{
    time--;
    if(time > 0){
        timer.innerText = `' ${time}`;
    }else{
        heartPoint--;
        heartCount();

        if(!this.deg){
            let i = true;
            this.deg = setInterval(() => {
                if(i){
                    batSprite.style.opacity = 0.3;
                    i = false;
                }else{
                    batSprite.style.opacity = 1;
                    i = true;
                }
            },200);
            setTimeout(() => {clearInterval(deg)}, 1600);
            setTimeout(() => {delete deg}, 1600);
        }
        
        if(heartPoint <= 0){
            gameOver();
        }
        time = 16;
    }
},1000);
}

reloadInterTime();

//________________________________________Mob_______________________________________.
//Fly_________________.
const fly = document.getElementById('mouche');
fly.style.top = "0px";
fly.style.left = "100px";

window.addEventListener('keydown', function(e){

    if(e.code == keyActive && (batSprite.offsetLeft + 50) > fly.offsetLeft && (batSprite.offsetLeft + 50) < (fly.offsetLeft + 100) && (batSprite.offsetTop + 50) > fly.offsetTop && (batSprite.offsetTop + 50) < (fly.offsetTop + 100)){
        score++
        time = 16;
        pts.innerText = score;
        fly.style.display = 'none';
    }
});

//Owl___________________.
const owl = document.getElementById('hibou1');
owl.style.top = "50%";
owl.style.left = "33%";

const owl2 = document.getElementById('hibou2');
owl2.style.top = "50%";
owl2.style.left = "66%";


//Boucle sur recherche de collision avec le hibou...
heartCount();
let ok = false;

function colWithOwl(owl){
    if((batSprite.offsetLeft + 80) >= owl.offsetLeft +20 && (batSprite.offsetLeft +20) < (owl.offsetLeft + 80) && (batSprite.offsetTop + 80) > owl.offsetTop +20 && (batSprite.offsetTop +20) < (owl.offsetTop + 80)){
        if(!this.deg){
            heartPoint--
            heartCount();
            let i = true;
            this.deg = setInterval(() => {
                if(i){
                    batSprite.style.opacity = 0.3;
                    i = false;
                }else{
                    batSprite.style.opacity = 1;
                    i = true;
                }
            },200);
            setTimeout(() => {clearInterval(deg);
                batSprite.style.opacity = 1;
            }, 1600);
            setTimeout(() => {delete deg}, 1600);

        }

        
        if(heartPoint <= 0){
            if(!ok){
                ok = true
                gameOver();
                setTimeout(() =>{location.reload()}, 3990);
            }
        }
    }
}

setInterval(() => {
    colWithOwl(owl);
},30);

setInterval(() => {
    colWithOwl(owl2);
},30);


//_____________Mouvement mob....
let timeInter = 800;
let timeResetInter = 400;

//function random...
function getRandomArbitrary(min, max) {
    return  Math.round(Math.random() * (max - min) + min);
};

//owl...
let dirOwl = 'dirOwl';
let savedDirOwl = 'savedDirOwl';
let minWidthOwl1 = 0;
let maxWidthOwl1 = clientWidth/2;

let dirOwl2 = 'dirOwl2';
let savedDirOwl2 = 'savedDirOwl2';
let minWidthOwl2 = clientWidth/2;
let maxWidthOwl2 = clientWidth;

//array du random...
let arrayOwl = [0, 1, 2, 3];

//random 1er owl...
function displayOwl() { this.interOwl = setInterval(() => {

    if(batSprite.offsetLeft >= minWidthOwl1 && batSprite.offsetLeft < maxWidthOwl1){
        if(owl.offsetTop + 50 < batSprite.offsetTop + 50 && owl.offsetLeft + 50 < batSprite.offsetLeft + 50){
            this.followDownOwl = setInterval(() =>{owl.style.top = owl.offsetTop + 8 +'px'}, 40);
            this.followRightOwl = setInterval(() =>{owl.style.left = owl.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl);
                clearInterval(followRightOwl);
                delete followDownOwl;
                delete followRightOwl;
            }, timeResetInter)
        }else if(owl.offsetTop + 50 < batSprite.offsetTop + 50 && owl.offsetLeft + 50 > batSprite.offsetLeft + 50){
            this.followDownOwl = setInterval(() =>{owl.style.top = owl.offsetTop + 8 +'px'}, 40);
            this.followLeftOwl = setInterval(() =>{owl.style.left = owl.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl);
                clearInterval(followLeftOwl);
                delete followDownOwl;
                delete followLeftOwl;
            }, timeResetInter)
        }else if(owl.offsetTop + 50 > batSprite.offsetTop + 50 && owl.offsetLeft + 50 < batSprite.offsetLeft + 40){
            this.followUpOwl = setInterval(() =>{owl.style.top = owl.offsetTop - 8 +'px'}, 40);
            this.followRightOwl = setInterval(() =>{owl.style.left = owl.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl);
                clearInterval(followRightOwl);
                delete followUpOwl;
                delete followRightOwl;
            }, timeResetInter)
        }else if(owl.offsetTop + 50 > batSprite.offsetTop + 50 && owl.offsetLeft + 50 > batSprite.offsetLeft + 40){
            this.followUpOwl = setInterval(() =>{owl.style.top = owl.offsetTop - 8 +'px'}, 40);
            this.followLeftOwl = setInterval(() =>{owl.style.left = owl.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl);
                clearInterval(followLeftOwl);
                delete followUpOwl;
                delete followLeftOwl;
            }, timeResetInter)
        }else if(owl.offsetTop + 50 < batSprite.offsetTop + 50){
            this.followDownOwl = setInterval(() =>{owl.style.top = owl.offsetTop + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl);
                delete followDownOwl;
            }, timeResetInter)
        }else if(owl.offsetTop + 50 > batSprite.offsetTop + 50){
            this.followUpOwl = setInterval(() =>{owl.style.top = owl.offsetTop - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl);
                delete followUpOwl;
            }, timeResetInter)
        }else if(owl.offsetLeft + 50 < batSprite.offsetLeft + 50){
            this.followRightOwl = setInterval(() =>{owl.style.left = owl.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followRightOwl);
                delete followRightOwl;
            }, timeResetInter)
        }else if(owl.offsetLeft + 50 > batSprite.offsetLeft + 50){
            this.followLeftOwl = setInterval(() =>{owl.style.left = owl.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followLeftOwl);
                delete followLeftOwl;
            }, timeResetInter)
        }else{
        
        }
    }else{

        if(owl.offsetTop <= 0){
            this.downOwl =  setInterval(() =>{owl.style.top = owl.offsetTop + 20 +'px'},40);
            setTimeout(() =>{
                clearInterval(downOwl);
                delete downOwl;
            }, timeResetInter);
        }else if(owl.offsetTop >= clientHeight){
            this.upOwl = setInterval(() =>{owl.style.top = owl.offsetTop - 20 + 'px'},40);
            setTimeout(() =>{
                clearInterval(upOwl);
                delete upOwl;
            }, timeResetInter)
        }else if(owl.offsetLeft <= minWidthOwl1){
            this.rightOwl = setInterval(() =>{owl.style.left = owl.offsetLeft + 20 +'px'},40);
            setTimeout(() =>{
                clearInterval(rightOwl);
                delete rightOwl;
            }, timeResetInter);
        }else if(owl.offsetLeft >= maxWidthOwl1){
            this.leftOwl = setInterval(() =>{owl.style.left = owl.offsetLeft - 20 +'px'},40);
            setTimeout(() =>{
                clearInterval(leftOwl);
                delete leftOwl;
            }, timeResetInter);
        }else{
          sessionStorage.setItem(dirOwl,  arrayOwl[getRandomArbitrary(0,3)]);
          if((sessionStorage.getItem(dirOwl) == 0 && sessionStorage.getItem(savedDirOwl) != 0) || sessionStorage.getItem(savedDirOwl) == 2){
            this.downOwl =  setInterval(() =>{owl.style.top = owl.offsetTop + 15 +'px';},40);
            setTimeout(() =>{
                clearInterval(downOwl);
                delete downOwl;
                sessionStorage.removeItem(savedDirOwl);
                sessionStorage.setItem(savedDirOwl, sessionStorage.getItem(dirOwl));
                sessionStorage.removeItem(dirOwl);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl) == 1 && sessionStorage.getItem(savedDirOwl) != 1) || sessionStorage.getItem(savedDirOwl) == 3){
            this.upOwl = setInterval(() =>{owl.style.top = owl.offsetTop - 15 + 'px'},40);
            setTimeout(() =>{
                clearInterval(upOwl);
                delete upOwl;
                sessionStorage.removeItem(savedDirOwl);
                sessionStorage.setItem(savedDirOwl, sessionStorage.getItem(dirOwl));
                sessionStorage.removeItem(dirOwl);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl) == 2 && sessionStorage.getItem(savedDirOwl) != 2) || sessionStorage.getItem(savedDirOwl) == 0){
            this.leftOwl = setInterval(() =>{owl.style.left = owl.offsetLeft + 15 +'px'},40);
            setTimeout(() =>{
                clearInterval(leftOwl);
                delete leftOwl;
                sessionStorage.removeItem(savedDirOwl);
                sessionStorage.setItem(savedDirOwl, sessionStorage.getItem(dirOwl));
                sessionStorage.removeItem(dirOwl);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl) == 3 && sessionStorage.getItem(savedDirOwl) != 3) || sessionStorage.getItem(savedDirOwl) == 1){
            this.rightOwl = setInterval(() =>{owl.style.left = owl.offsetLeft - 15 +'px'},40);
            setTimeout(() =>{
                clearInterval(rightOwl);
                delete rightOwl;
                sessionStorage.removeItem(savedDirOwl);
                sessionStorage.setItem(savedDirOwl, sessionStorage.getItem(dirOwl));
                sessionStorage.removeItem(dirOwl);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }
        }
    }
}, timeInter);
};
displayOwl();

//Random du 2eme owl.
function displayOwl2() {this.interOwl2 = setInterval(() => {

    if(batSprite.offsetLeft > minWidthOwl2 && batSprite.offsetLeft <= maxWidthOwl2){
        if(owl2.offsetTop + 50 < batSprite.offsetTop + 50 && owl2.offsetLeft + 50 < batSprite.offsetLeft + 50){
            this.followDownOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop + 8 +'px'}, 40);
            this.followRightOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl2);
                clearInterval(followRightOwl2);
                delete followDownOwl2;
                delete followRightOwl2;
            }, timeResetInter)
        }else if(owl2.offsetTop + 50 < batSprite.offsetTop + 50 && owl2.offsetLeft + 50 > batSprite.offsetLeft + 50){
            this.followDownOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop + 8 +'px'}, 40);
            this.followLeftOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl2);
                clearInterval(followLeftOwl2);
                delete followDownOwl2;
                delete followLeftOwl2;
            }, timeResetInter)
        }else if(owl2.offsetTop + 50 > batSprite.offsetTop + 50 && owl2.offsetLeft + 50 < batSprite.offsetLeft + 50){
            this.followUpOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop - 8 +'px'}, 40);
            this.followRightOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl2);
                clearInterval(followRightOwl2);
                delete followUpOwl2;
                delete followRightOwl2;
            }, timeResetInter)
        }else if(owl2.offsetTop + 50 > batSprite.offsetTop + 50 && owl2.offsetLeft + 50 > batSprite.offsetLeft + 50){
            this.followUpOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop - 8 +'px'}, 40);
            this.followLeftOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl2);
                clearInterval(followLeftOwl2);
                delete followUpOwl2;
                delete followLeftOwl2;
            }, timeResetInter)
        }else if(owl2.offsetTop + 50 < batSprite.offsetTop + 50){
            this.followDownOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followDownOwl2);
                delete followDownOwl2;
            }, timeResetInter)
        }else if(owl2.offsetTop + 50 > batSprite.offsetTop + 50){
            this.followUpOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followUpOwl2);
                delete followUpOwl2;
            }, timeResetInter)
        }else if(owl2.offsetLeft + 50 < batSprite.offsetLeft + 50){
            this.followRightOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft + 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followRightOwl2);
                delete followRightOwl2;
            }, timeResetInter)
        }else if(owl2.offsetLeft + 50 > batSprite.offsetLeft + 50){
            this.followLeftOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft - 8 +'px'}, 40);
            setTimeout(() =>{
                clearInterval(followLeftOwl2);
                delete followLeftOwl2;
            }, timeResetInter)
        }else{
        
        }
    }else{

        if(owl2.offsetTop <= 0){
            this.downOwl2 =  setInterval(() =>{owl2.style.top = owl2.offsetTop + 20 +'px';},40);
            setTimeout(() =>{
                clearInterval(downOwl2);
                delete downOwl2;
            }, timeResetInter);
        }else if(owl2.offsetTop >= clientHeight){
            this.upOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop - 20 + 'px'},40);
            setTimeout(() =>{
                clearInterval(upOwl2);
                delete upOwl2;
            }, timeResetInter)
        }else if(owl2.offsetLeft <= minWidthOwl2){
            this.leftOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft + 20 +'px'},40);
            setTimeout(() =>{
                clearInterval(leftOwl2);
                delete leftOwl2;
            }, timeResetInter);
        }else if(owl2.offsetLeft >= maxWidthOwl2){
            this.rightOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft - 20 +'px'},40);
            setTimeout(() =>{
                clearInterval(rightOwl2);
                delete rightOwl2;
            }, timeResetInter);
        }else{
          sessionStorage.setItem(dirOwl2,  arrayOwl[getRandomArbitrary(0,3)]);
          if((sessionStorage.getItem(dirOwl2) == 0 && sessionStorage.getItem(savedDirOwl2) != 0) || sessionStorage.getItem(savedDirOwl2) == 2){
            this.downOwl2 =  setInterval(() =>{owl2.style.top = owl2.offsetTop + 15 +'px';},40);
            setTimeout(() =>{
                clearInterval(downOwl2);
                delete downOwl2;
                sessionStorage.removeItem(savedDirOwl2);
                sessionStorage.setItem(savedDirOwl2, sessionStorage.getItem(dirOwl2));
                sessionStorage.removeItem(dirOwl2);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl2) == 1 && sessionStorage.getItem(savedDirOwl2) != 1) || sessionStorage.getItem(savedDirOwl2) == 3){
            this.upOwl2 = setInterval(() =>{owl2.style.top = owl2.offsetTop - 15 + 'px'},40);
            setTimeout(() =>{
                clearInterval(upOwl2);
                delete upOwl2;
                sessionStorage.removeItem(savedDirOwl2);
                sessionStorage.setItem(savedDirOwl2, sessionStorage.getItem(dirOwl2));
                sessionStorage.removeItem(dirOwl2);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl2) == 2 && sessionStorage.getItem(savedDirOwl2) != 2) || sessionStorage.getItem(savedDirOwl2) == 0){
            this.leftOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft + 15 +'px'},40);
            setTimeout(() =>{
                clearInterval(leftOwl2);
                delete leftOwl2;
                sessionStorage.removeItem(savedDirOwl2);
                sessionStorage.setItem(savedDirOwl2, sessionStorage.getItem(dirOwl2));
                sessionStorage.removeItem(dirOwl2);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }else if((sessionStorage.getItem(dirOwl2) == 3 && sessionStorage.getItem(savedDirOwl2) != 3) || sessionStorage.getItem(savedDirOwl2) == 1){
            this.rightOwl2 = setInterval(() =>{owl2.style.left = owl2.offsetLeft - 15 +'px'},40);
            setTimeout(() =>{
                clearInterval(rightOwl2);
                delete rightOwl2;
                sessionStorage.removeItem(savedDirOwl2);
                sessionStorage.setItem(savedDirOwl2, sessionStorage.getItem(dirOwl2));
                sessionStorage.removeItem(dirOwl2);
                //console.log(sessionStorage.getItem('savedDirOwl'));
            }, timeResetInter);
          }
        }
    }
}, timeInter);
}
displayOwl2();

//fly....
fly.style.display = 'none';

let timingFly = 6000;
let easyMode = false;
let mediumMode = false;
let hardMode = false;

setInterval(() =>{
    if(score >= 5 && score < 8){
        if(!easyMode){
            //console.log(easyMode);
            easyMode = true;
           // console.log(easyMode);
            this.clearInterval(interFly);
            timingFly = 5000;
            displayFly()
            this.clearInterval(interOwl);
            this.clearInterval(interOwl2);
            timeInter = 600;
            timeResetInter = 400;
            displayOwl()
            displayOwl2()

        }
    }else if(score >= 9 && score <12){
        if(!mediumMode){
            mediumMode = true;
            this.clearInterval(interFly);
            timingFly = 4000;
            displayFly()
            this.clearInterval(interOwl);
            this.clearInterval(interOwl2);
            timeInter = 500;
            timeResetInter = 400;
            displayOwl()
            displayOwl2()
        }
    }else if(score >= 12){
        if(!hardMode){
            hardMode = true;
            this.clearInterval(interFly);
            timingFly = 3000;
            displayFly();
            timeInter = 450;
            timeResetInter = 380;
            displayOwl()
            displayOwl2()
        }
    }
},1000);

function displayFly() {this.interFly = setInterval(() =>{

        console.log(timingFly);
        fly.style.display = 'block';
        let x = getRandomArbitrary(0, clientWidth-100);
        let y = getRandomArbitrary(0, clientHeight-100);
        fly.style.top = `${y}px`;
        fly.style.left = `${x}px`;
        setTimeout(() => {fly.style.display = 'none'}, timingFly-1000);

}, timingFly);
}

displayFly();
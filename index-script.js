let bestScore = document.getElementById('record');
bestScore.innerText = ` ${localStorage.getItem('highScore')? localStorage.getItem('highScore') : 0}`;

//Recuperation des button...
let buttonSetUp = document.getElementById('upSetButton');
let trueUp = false;
let buttonSetDown = document.getElementById('downSetButton');
let trueDown = false;
let buttonSetLeft = document.getElementById('leftSetButton');
let trueLeft = false;
let buttonSetRight = document.getElementById('rightSetButton');
let trueRight = false;
let buttonSetActive = document.getElementById('activeSetButton');
let trueActive = false;

//Recuperation affichage settings...
let setUp = document.getElementById('upSet');
let setDown = document.getElementById('downSet');
let setLeft = document.getElementById('leftSet');
let setRight = document.getElementById('rightSet');
let setActive = document.getElementById('activeSet');

//Parametre par defaut...
//Touche action...
if(!localStorage.getItem('activeKey')){
    localStorage.setItem('activeKey', 'Space');
    localStorage.setItem('nameActiveSet', 'Espace');
    setActive.innerText = `${localStorage.getItem('nameActiveSet').toUpperCase()}`;
}else{
    setActive.innerText = `${localStorage.getItem('nameActiveSet').toUpperCase()}`;
}

//Touche haut...
if(!localStorage.getItem('upKey')){
    localStorage.setItem('upKey', 'KeyW');
    localStorage.setItem('nameUpKey', 'Z');
    setUp.innerText = `${localStorage.getItem('nameUpKey').toUpperCase()}`;
}else{
    setUp.innerText = `${localStorage.getItem('nameUpKey').toUpperCase()}`;
};

//Touche bas...
if(!localStorage.getItem('downKey')){
    localStorage.setItem('downKey', 'KeyS');
    localStorage.setItem('nameDownKey', 'S');
    setDown.innerText = `${localStorage.getItem('nameDownKey').toUpperCase()}`;
}else{
    setDown.innerText = `${localStorage.getItem('nameDownKey').toUpperCase()}`;
};

//Touche gauche...
if(!localStorage.getItem('leftKey')){
    localStorage.setItem('leftKey', 'KeyA');
    localStorage.setItem('nameLeftKey', 'Q');
    setLeft.innerText = `${localStorage.getItem('nameLeftKey').toUpperCase()}`;
}else{
    setLeft.innerText = `${localStorage.getItem('nameLeftKey').toUpperCase()}`;
};

//Touche droite...
if(!localStorage.getItem('rightKey')){
    localStorage.setItem('rightKey', 'KeyD');
    localStorage.setItem('nameRightKey', 'D');
    setRight.innerText = `${localStorage.getItem('nameRightKey').toUpperCase()}`;
}else{
    setRight.innerText = `${localStorage.getItem('nameRightKey').toUpperCase()}`;
};

//Modif setting Active.
buttonSetActive.addEventListener('click', function(e){
    e.preventDefault();

    trueActive = true;
    window.addEventListener('keydown', function(a){
        if(trueActive){
            if(a.code == 'Space'){
                this.localStorage.removeItem('activeKey');
                this.localStorage.setItem('activeKey', a.code);
                this.localStorage.removeItem('nameActiveSet');
                this.localStorage.setItem('nameActiveSet', 'Espace');
                setActive.innerText = `${this.localStorage.getItem('nameActiveSet').toUpperCase()}`;
            }else{
                this.localStorage.removeItem('activeKey');
                this.localStorage.setItem('activeKey', a.code);
                this.localStorage.removeItem('nameActiveSet');
                this.localStorage.setItem('nameActiveSet', a.key);
                setActive.innerText = `${this.localStorage.getItem('nameActiveSet').toUpperCase()}`;
            }
        trueActive = false
        }else{
            a.stopPropagation();
        }
    });
});

//Modif setting Up.
buttonSetUp.addEventListener('click', function(e){
    e.preventDefault();

    trueUp = true;
    window.addEventListener('keydown', function(a){
        if(trueUp){
            this.localStorage.removeItem('upKey');
            this.localStorage.setItem('upKey', a.code);
            this.localStorage.removeItem('nameUpKey');
            this.localStorage.setItem('nameUpKey', a.key);
            setUp.innerText = `${this.localStorage.getItem('nameUpKey').toUpperCase()}`;
            trueUp = false
        }else{
            a.stopPropagation();
        }
    });
});

//Modif setting Down.
buttonSetDown.addEventListener('click', function(e){
    e.preventDefault();

    trueDown = true;
    window.addEventListener('keydown', function(a){
        if(trueDown){
            this.localStorage.removeItem('downKey');
            this.localStorage.setItem('downKey', a.code);
            this.localStorage.removeItem('nameDownKey');
            this.localStorage.setItem('nameDownKey', a.key);
            setDown.innerText = `${this.localStorage.getItem('nameDownKey').toUpperCase()}`;
            trueDown = false;
        }else{
            a.stopPropagation();
        }
    });
});

//Modif setting Left.
buttonSetLeft.addEventListener('click', function(e){
    e.preventDefault();

    trueLeft = true;
    window.addEventListener('keydown', function(a){
        if(trueLeft){
            this.localStorage.removeItem('leftKey');
            this.localStorage.setItem('leftKey', a.code);
            this.localStorage.removeItem('nameLeftKey');
            this.localStorage.setItem('nameLeftKey', a.key);
            setLeft.innerText = `${this.localStorage.getItem('nameLeftKey').toUpperCase()}`;
            trueLeft = false;
        }else{
            a.stopPropagation();
        }
    });
});

//Modif setting Right
buttonSetRight.addEventListener('click', function(e){
    e.preventDefault();

    trueRight = true;
    window.addEventListener('keydown', function(a){
        if(trueRight){
            this.localStorage.removeItem('rightKey');
            this.localStorage.setItem('rightKey', a.code);
            this.localStorage.removeItem('nameRightKey');
            this.localStorage.setItem('nameRightKey', a.key);
            setRight.innerText = `${this.localStorage.getItem('nameRightKey').toUpperCase()}`;
            trueRight = false;
        }else{
            a.stopPropagation();
        }
    });
});

document.getElementById('depl').innerText = `"${localStorage.getItem('nameUpKey')} + ${localStorage.getItem('nameDownKey')} + ${localStorage.getItem('nameLeftKey')} + ${localStorage.getItem('nameRightKey')}"`;

document.getElementById('act').innerText = `"${localStorage.getItem('nameActiveSet')}"`;
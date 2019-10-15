/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 20;
        console.log('ok: ' + this.top);

    }
    this.moveleft = function () {
        this.left -= 20;
        console.log('ok: ' + this.left);

    }
    this.moveup = function () {
        this.top -= 20;
        console.log('ok: ' + this.top);

    }

}

var hero = new Hero('Pikachu.jpg', 20, 30, 200);

function start(){
    if(hero.left <=1350 && hero.top <=20){
        hero.moveRight();
    }

    if(hero.left >= 1350 && hero.top<=500){hero.moveDown();}

    if(hero.top>=500 && hero.left>=30){hero.moveleft();}

    if(hero.left<=30 && hero.top <=500){hero.moveup();}
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

start();
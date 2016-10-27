function playNote(x) {
    var k;
    if (x==1) k = document.getElementById('c');
    if (x==2) k = document.getElementById('cis');
    if (x==3) k = document.getElementById('d');
    if (x==4) k = document.getElementById('es');
    if (x==5) k = document.getElementById('e');
    if (x==6) k = document.getElementById('f');
    if (x==7) k = document.getElementById('fis');
    if (x==8) k = document.getElementById('g');
    if (x==9) k = document.getElementById('gis');
    if (x==10) k = document.getElementById('a');
    if (x==11) k = document.getElementById('b');
    if (x==12) k = document.getElementById('h');

    if (x==13) k = document.getElementById('c1');
    if (x==14) k = document.getElementById('cis1');
    if (x==15) k = document.getElementById('d1');
    if (x==16) k = document.getElementById('es1');
    if (x==17) k = document.getElementById('e1');
    if (x==18) k = document.getElementById('f1');
    if (x==19) k = document.getElementById('fis1');
    if (x==20) k = document.getElementById('g1');
    if (x==21) k = document.getElementById('gis1');
    if (x==22) k = document.getElementById('a1');
    if (x==23) k = document.getElementById('b1');
    if (x==24) k = document.getElementById('h1');
    if (x==25) k = document.getElementById('c2');

    k.currentTime=0;
    k.play();
}


document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode >= 97 || e.keyCode <= 122) {
        var ch ='abcdefghijklmnopqrstuvwxyz'.charAt(e.keyCode - 97);
        playNote(('0qwertyuiopasdfghjklzxcvbnm'.indexOf(ch)));
    }
};
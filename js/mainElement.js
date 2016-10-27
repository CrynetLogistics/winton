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





var SERVER_ADDRESS = "http://chat.wintonhackathon.com";
var ROOM = "house_party_tonight2";
var USER_ID = 'superuser';

var SOUND = false;

var wsw;

$(document).ready(function(){
    setInterval(getChats, 1000);

    getChats();

    $('#newMessage').bind("enterKey",function(e){
        sendMessage();
    });
    $('#newMessage').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

    wsw = new WebSocket("ws://chat.wintonhackathon.com/rooms/"+ROOM+"/ws");

    wsw.onopen = function() {
        wsw.onmessage = function(e) {
            playNote(e.data.substring(1));
        }
    }

});


function getChats(){
    getChatsRe();
}

function sendMessage(){

    var messageToBeSent = $('#newMessage').val();

    if(messageToBeSent.charCodeAt(0)==47) {
        var special = messageToBeSent.split(" ")[0].substring(1);
        if (special === 'sound') {
            SOUND = !SOUND;
        }
    }

    var data = {
        user:USER_ID,
        message:messageToBeSent
    };

    jQuery.ajax({
        'type': 'POST',
        'url': SERVER_ADDRESS+'/rooms/' + ROOM,
        'contentType': 'application/json',
        'data': JSON.stringify(data),
        //'dataType': 'json',
        'success': getChatsRe
    });

    $('#newMessage').val('');

}


function getChatsRe(){
    $.get(SERVER_ADDRESS+'/rooms/' + ROOM, function(data){
         $('#chatDiv').html('');
         var i = 0;
         while(data[i]!=null) {

             var messageToBeSent = data[i].message;
             var modifier = '';
             if(messageToBeSent.charCodeAt(0)==47){
                 var special = messageToBeSent.split(" ")[0].substring(1);
                 messageToBeSent = messageToBeSent.substring(messageToBeSent.split(" ")[0].length);
                 if(special==='blue'){
                     modifier = 'style="color:blue;"';
                 }else if(special==='giant'){
                     modifier = 'style="font-size:100px"';
                 }

                 if(messageToBeSent.length == 0){
                     i++;
                     continue;
                 }
             }

             var date = new Date(data[i].dateTime);
             //$('#chatTable').append('<tr></tr><td>' + data[i].user + '</td> <td>' + data[i].message + '</td> <td>' + date.getHours() + '<strong>' + date.getMinutes() + '</strong></td> </tr>');
             $('#chatDiv').append('<div class="row" id="chatDiv"> <div class="col-sm-2"><strong>' + data[i].user + '</strong></div> ' +
                 '<div class="col-sm-9" '+ modifier +' > ' + messageToBeSent + ' </div> ' +
                 '<div class="col-sm-1" align="right"><inline class="smallTime">' + date.getHours() + ' </inline><strong class="largeTime">' + getProperTime(date.getMinutes()) + '</strong></div> ' +
                 '</div><br>');
             i++;
         }
    });
}

function getProperTime(tme){
    if(tme<=9){
        return "0" + tme;
    }else{
        return "" + tme;
    }
}


function trySocket(msg){
    wsw.send(JSON.stringify({
        user:USER_ID,
        message:'/' + msg
    }));
}

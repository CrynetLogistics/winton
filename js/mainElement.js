var SERVER_ADDRESS = "http://chat.wintonhackathon.com";
var ROOM = "house_party_tonight";
var USER_ID = 'the dark one';

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

    trySocket();

});


function getChats(){
    getChatsRe();
}

function sendMessage(){

    var messageToBeSent = $('#newMessage').val();

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


function trySocket(){
    var wsw = new WebSocket("ws://chat.wintonhackathon.com/rooms/"+ROOM+"/ws");

    wsw.onopen = function() {
        wsw.send(JSON.stringify({
            user:USER_ID,
            message:'*' + USER_ID + '* HAS JOINED THE ROOM'
        }));
    };
}
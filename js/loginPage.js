var SERVER_ADDRESS = "http://young-plateau-61675.herokuapp.com"

$(document).ready(function(){
    $('#loginBtn').click(attemptAuth);
});

function attemptAuth(){
    //if(getCookie("loginPass")===""){
    //use a session cookie to store the login and status of the session
    //}else{
        var passkey = $('#passwordBox').val();
        $.post(SERVER_ADDRESS, {request: "login", password: passkey}, function (data) {
            var data_rcvd = $.parseJSON(data);
            if (data_rcvd.authResult === 1) {
                window.location.href = "http://stackoverflow.com";
                document.cookie = "loginPass=" + passkey;
            } else {
                $('#entirePage').html('');
            }
        });
    //}
}
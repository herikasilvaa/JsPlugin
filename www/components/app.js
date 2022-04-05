function nameAlert(){
    var userName = document.getElementById("name").value;
    function offuse(){
}
    navigator.notification.alert('Bem vindo '+userName,offuse,'Seja bem vindo','Ok');
}

function ageAlert(){
    navigator.notification.alert('Não conseguimos fazer essa parte',offuse,'D e s c u l p a','Ok');
}

function closeApp(){
    navigator.vibrate(3000);
    navigator.app.exitApp();
}
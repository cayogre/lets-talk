
//ADICIONE SEUS LINKS FIREBASE

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       
    });
  });

}

getData();
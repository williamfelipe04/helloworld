
/**
 * Chaves de configuração do Firebase
 * Copie aqui as suas prórias chaves do Firebase.
 **/
const firebaseConfig = {
    apiKey: "AIzaSyCvkA29tKoNplplrFZ0c6_uw3gFXpdjhAE",
    authDomain: "blog-hello-word-principal.firebaseapp.com",
    projectId: "blog-hello-word-principal",
    storageBucket: "blog-hello-word-principal.appspot.com",
    messagingSenderId: "350702842516",
    appId: "1:350702842516:web:e8b8ce52df782816d0ba81"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa o Firebase Authentication
const auth = firebase.auth();

// Identifica elementos do HTML para interação
const userAccess = document.getElementById('userAccess');
const userImg = document.getElementById('userImg');
const userIcon = document.getElementById('userIcon');
const userLabel = document.getElementById('userLabel');

// Monitora se houve mudanças na autenticação do usuário
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Se alguém se logou, faça isso:
        // Chama a função que trata o usuário logado
        console.log(user);
        isLogged(user);
    } else {
        // Se alguém deslogou, faça isso:
        // Chama a função que trata o usuário NÃO logado
        notLogged();
    }
});

// Função que trata o usuário logado
function isLogged(user) {
    // Altera href do link
    userAccess.href = `profile.php?ref=${location.href}`;
    // Altera title do link
    userAccess.title = `Ver perfil de ${user.displayName}`;
    // Oculta o ícone de login
    userIcon.style.display = 'none';
    // Define os atributos da imagem conforme dados do usuário
    userImg.src = user.photoURL;
    userImg.alt = user.displayName;
    // Mostrar a imagem do usuário
    userImg.style.display = 'inline';
    // Altera a label para entrar
    userLabel.innerHTML = 'Perfil';
}

// Função que trata o usuário NÃO logado 
function notLogged() {
    // Altera href do link
    userAccess.href = `login.php?ref=${location.href}`;
    // Altera title do link
    userAccess.title = 'Logue-se';
    // Oculta a imagem do usuário
    userImg.style.display = 'none';
    // Mostra o ícone de login
    userIcon.style.display = 'inline';
    // Altera a label para entrar
    userLabel.innerHTML = 'Entrar';
}
// Seleciona os elementos do HTML para interação
const userName = document.getElementById('userName');
const userCard = document.getElementById('userCard');
const btnGoogleProfile = document.getElementById('btnGoogleProfile');
const btnLogout = document.getElementById('btnLogout');

// Monitora se houve mudanças na autenticação do usuário
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Se alguém se logou, faça isso:
        // Chama a função que exibe o card do usuário logado
        showUserCard(user);
    } else {
        // Se alguém deslogou, faça isso:
        // Obtém o parâmetro do link da página
        var searchParams = new URLSearchParams(window.location.search);
        // Obtém o valor do parâmetro "ref"
        var refValue = searchParams.get('ref');
        // Redireciona para a página de origem
        location.href = refValue ? refValue : 'index.php';
    }
});

// Função que exibe o card do usuário logado
function showUserCard(user) {
    
    // Variável com a view do card
    var userCardData = `
    
<img src="${user.photoURL}" alt="${user.displayName}" referrerpolicy="no-referrer">
    
    
    `;

    // Envia a variável para a view
    userCard.innerHTML = userCardData;

}
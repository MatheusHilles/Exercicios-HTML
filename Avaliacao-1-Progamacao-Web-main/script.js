
document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('nome-usuario').value;
            const password = document.getElementById('senha').value;

            if (username === 'admin' && password === '12345') {
                document.cookie = "username=" + username + "; path=/";
                window.location.href = 'dashboard.html';
            } else {
                alert('Usuário ou senha incorretos.');
            }
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            window.location.href = 'index.html';
        });
    }
});

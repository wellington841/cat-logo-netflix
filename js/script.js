// Função para filtrar filmes baseado no nome digitado na caixa de pesquisa
function filterMovies() {
    // Obter o valor digitado no campo de pesquisa
    const searchTerm = document.getElementById('search').value.toLowerCase();

    // Selecionar todos os cards de filme
    const movieCards = document.querySelectorAll('.movie-card');

    // Loop por cada card de filme
    movieCards.forEach(card => {
        // Obter o nome do filme
        const movieName = card.getAttribute('data-name').toLowerCase();

        // Verificar se o nome do filme contém o termo de busca
        if (movieName.includes(searchTerm)) {
            // Se o nome do filme contiver o termo de busca, mostrar o card
            card.style.display = 'block';
        } else {
            // Se não, esconder o card
            card.style.display = 'none';
        }
    });
}

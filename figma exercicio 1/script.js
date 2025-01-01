// Seleciona todos os itens de FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Verifica se o item já está ativo
        const isActive = item.classList.contains('active');

        // Fecha todas as respostas e remove a classe 'active'
        faqItems.forEach(i => {
            i.classList.remove('active');
        });

        // Se o item não estava ativo, abre ele
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

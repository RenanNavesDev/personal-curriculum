const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const images = document.querySelectorAll('.open-modal');

// Abre o modal com a imagem clicada
images.forEach(image => {
    image.addEventListener('click', () => {
       modal.style.display = 'flex';
       modalImage.src = image.src //usa a mesma imagem
    });
});

// Fecha o modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.classList.remove('zoomed'); // Remove o zoom ao fechar
});

// Adicionar/Remove zoom na imagem ao clicar
modalImage.addEventListener('click', () => {
    modalImage.classList.toggle('zoomed');
});

// Fecha o modal clicando fora da imagem
modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
        modalImage.classList.remove('zoomed');
    }
});


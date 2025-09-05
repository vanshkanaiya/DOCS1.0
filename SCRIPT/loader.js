window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});
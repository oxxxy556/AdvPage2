function updateBackground() {
    const banner = document.getElementById('banner');
    const word = document.getElementById('background-word').value;
    const imageUrl = document.getElementById('image-url').value;

    banner.classList.remove('has-text');
    banner.style.backgroundImage = 'none';

    if (imageUrl) {
        banner.style.backgroundImage = `url('${imageUrl}')`;
    } else if (word) {
        banner.setAttribute('data-background-word', word);
        banner.classList.add('has-text');
    } else {
        banner.removeAttribute('data-background-word');
    }
}
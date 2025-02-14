let noClickCount = 0;

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('message').innerText = "Happy Valentine's day my loveee 💖";
    document.getElementById('rose-animation').classList.remove('hidden');
});

document.getElementById('no-button').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount < 3) {
        this.style.transform = `scale(${1 - noClickCount * 0.2})`;
    } else {
        this.style.display = 'none';
        document.getElementById('yes-button').classList.add('fullscreen');
    }
});


function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

function showVideo() {
    const popup = document.getElementById('video-popup');
    popup.style.display = 'flex';
    const video = document.getElementById('birthday-video');
    video.play();
}

function closeVideo() {
    const popup = document.getElementById('video-popup');
    popup.style.display = 'none';
    const video = document.getElementById('birthday-video');
    video.pause();
    video.currentTime = 0;
}


function startConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function startMelodyConfetti() {
    const container = document.getElementById('melody-confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 1000000);
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.toLowerCase() === '20') {
        goToPage(2);
    } else {
        errorMessage.textContent = "chắc chắn là dài hơn nữa :')";
    }
}

function startBubbles() {
    const container = document.getElementById('bubble-container');
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = 3 + Math.random() * 2 + 's';
        container.appendChild(bubble);

        setTimeout(() => bubble.remove(), 5000);
    }
}

function loadPhotos() {
    const photos = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg' // Replace with your photo paths
    ];
    const container = document.getElementById('photos-container');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        container.appendChild(img);
    });
}



startMelodyConfetti();
startBubbles();
loadPhotos();
startConfetti();
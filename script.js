const messages = [
    "Pleaseee?",
    "Give me a chancee",
    "Are you sure?",
    "Pretty pleaseee",
    "Really sure??",
    "What if I ask you nicely?",
    "With an ice-creammm",
    "What about a light saber from disneyland",
    "Think againnn",
    "Pleaseee",
    "If you say no, I will be really sad",
    "Noo! This is how I become a Sith Lord!",
    "I know… you wouldn’t want to sacrifice younglings.",
    "Please… save me from the dark side!",
    "Just kidding, say yes pleaseee!"
];

let messageIndex = 0;

function moveButton() {
    const noButton = document.getElementById('nobtn');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.classList.add('wiggle');
    noButton.addEventListener('animationend', () => {
        noButton.classList.remove('wiggle');
    }, { once: true });

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${noButton.offsetLeft + noButton.offsetWidth / 2}px`;
    heart.style.top = `${noButton.offsetTop + noButton.offsetHeight / 2}px`;
    document.body.appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    }, { once: true });
}


function nextPage() {
    window.location.href = 'yes-page.html';
}

function Yess() {
    const gif = document.getElementById('gif');
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXdxbGZuNGhxZTltY2FkbjByY3M3a2s0a3Z6MnJqYnhlenlhbngwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sfgzCjyxgQHdCzudQ8/giphy.gif"
    gif.style.height = '300px';
}

function resetGif() {
    const gif = document.getElementById('gif');
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmpzempiNWxpcHoyYXQxZnM5dGY0b3N6Mm1vZnlzMXgyd3I4emFzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1hoKkBNSBxVyHIsPer/giphy.gif";  // Replace with your original image source
}





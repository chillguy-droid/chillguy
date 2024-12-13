const container = document.getElementById('scrollContainer');
const confettiContainer = document.getElementById('confettiContainer');
let currentIndex = 0;

const items = container.children;
const totalItems = items.length;

const scrollToIndex = (index) => {
  if (index >= 0 && index < totalItems) {
    items[index].scrollIntoView({ behavior: 'smooth' });
    currentIndex = index;
  }
};

const handleScroll = (event) => {
  if (event.deltaY > 0) {
    scrollToIndex(currentIndex + 1);
  } else {
    scrollToIndex(currentIndex - 1);
  }
};

container.addEventListener('wheel', handleScroll);

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + '%';
  confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

setInterval(createConfetti, 100);

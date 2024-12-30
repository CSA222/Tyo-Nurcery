const slider = document.querySelector('.image-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

const updateSliderPosition = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Sembunyikan tombol navigasi berdasarkan posisi
  prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  nextBtn.style.display = currentIndex === slider.children.length - 1 ? 'none' : 'block';
};

// Event listener untuk tombol "next"
nextBtn.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Event listener untuk tombol "prev"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Inisialisasi posisi awal slider
updateSliderPosition();

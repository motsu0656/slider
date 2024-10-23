let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 3000; // 3秒ごとに画像が切り替わる

// 最初の画像を表示
slides[currentSlide].style.display = 'block';

// 自動でスライドを切り替える関数
function showNextSlide() {
  showSlide(currentSlide + 1); // 次のスライドを表示
}

// スライドを手動で切り替える関数
function showSlide(index) {
  // スライドのインデックスを計算
  const newIndex = (index + totalSlides) % totalSlides;

  // 現在のスライドを非表示
  slides[currentSlide].style.display = 'none';

  // 新しいスライドを表示
  slides[newIndex].style.display = 'block';

  // currentSlideの再代入
  currentSlide = newIndex;
}

// 前のスライドを表示
document.getElementById('prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// 次のスライドを表示
document.getElementById('next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// 一定時間ごとに自動で次のスライドを表示
let slideInterval = setInterval(showNextSlide, intervalTime);

// ユーザーが手動でスライドを切り替えたら自動切り替えをリセット
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, intervalTime);
}

// 手動でのスライド切り替え時にインターバルをリセット
document.getElementById('prev').addEventListener('click', resetInterval);
document.getElementById('next').addEventListener('click', resetInterval);

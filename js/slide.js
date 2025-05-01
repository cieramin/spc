
let currentSlide = 0;
const slideCount = document.querySelectorAll('#slidee li').length;
const slidee = document.getElementById('slidee');

// 다음 슬라이드
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlide();
}

// 이전 슬라이드
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlide();
}

// 슬라이드 이동 함수
function updateSlide() {
    slidee.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 버튼 이벤트
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// 자동 슬라이드
setInterval(nextSlide, 2500); // 5초마다 자동 넘김

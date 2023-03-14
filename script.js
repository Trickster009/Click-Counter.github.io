let count = 0;

const countBtn = document.getElementById('count-btn');
const countText = document.getElementById('count-text');

countBtn.addEventListener('click', () => {
  count++;
  countText.innerText = count;
});

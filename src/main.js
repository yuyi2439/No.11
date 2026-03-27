import './style.css'

const circle = document.getElementById('circle');
const ballCountInput = document.getElementById('ballCount');
const ballCountDisplay = document.getElementById('ballCountDisplay');

// 创建小球
function createBalls(count) {
  // 清除现有小球
  circle.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    
    // 计算每个小球的角度
    const deg = (360 / count) * i;
    ball.style.setProperty('--deg', `${deg}deg`);
    
    // 设置旋转角度
    ball.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
    
    circle.appendChild(ball);
  }
}

// 监听滑块变化
ballCountInput.addEventListener('input', (e) => {
  const count = parseInt(e.target.value);
  ballCountDisplay.textContent = count;
  createBalls(count);
});

// 初始化
createBalls(8);
<script>
  let ballCount = $state(1);
  
  function createBalls(count) {
    const balls = [];
    for (let i = 0; i < count; i++) {
      const deg = 30 * i;
      balls.push({ id: i, deg });
    }
    return balls;
  }
  
  let balls = $derived(createBalls(ballCount));
</script>

<main>
  <div class="circle">
    {#each balls as ball (ball.id)}
      <div 
        class="ball"
        style="--deg: {ball.deg}deg; transform: translate(-50%, -50%) rotate({ball.deg}deg) translate(calc(190px * sin(var(--t))), 0);"
      ></div>
    {/each}
  </div>

  <div class="controls">
    <label for="ballCount">小球数量：</label>
    <input 
      type="range" 
      id="ballCount" 
      min="1" 
      max="12" 
      bind:value={ballCount}
    />
    <span class="ball-count">{ballCount}</span>
  </div>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
  }

  /* 大圆容器 */
  .circle {
    position: relative;
    width: 400px;
    height: 400px;
    border: 3px solid rgba(88, 223, 76, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    box-shadow:
      0 0 60px rgba(100, 200, 255, 0.1),
      inset 0 0 60px rgba(100, 200, 255, 0.05);
  }

  @property --t {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  /* 小球通用样式 */
  .ball {
    width: 12px;
    height: 12px; 
    background: #18a3e4;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: harmonic 5s linear infinite;
    box-shadow: 0 0 10px rgba(146, 212, 243, 0.8);
  }

  /* 🔥 只有两个关键帧：纯数学正弦运动 */
  @keyframes harmonic {
    0% { --t: 0deg; }
    100% { --t: 360deg; }
  }

  /* 控制面板 */
  .controls {
    margin-top: 40px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .controls label {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }

  .controls input[type="range"] {
    width: 200px;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #00d4ff, #7b2ff7);
    border-radius: 3px;
    outline: none;
  }

  .controls input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
  }

  .controls input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
  }

  .ball-count {
    color: #00d4ff;
    font-size: 24px;
    font-weight: bold;
    min-width: 30px;
    text-align: center;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .circle {
      width: 300px;
      height: 300px;
    }
    
    .ball {
      width: 10px;
      height: 10px;
    }
    
    @keyframes move {
      to { 
        transform: translate(-50%, -50%) rotate(var(--deg)) translateX(100px); 
      }
    }
    
    .controls {
      flex-direction: column;
      gap: 15px;
    }
  }
</style>

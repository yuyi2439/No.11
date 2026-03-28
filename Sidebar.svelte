<script>
  export let isPaused = false;
</script>

<aside class="sidebar">
  <h3>控制面板</h3>
  <button class="pause-btn" onclick={() => isPaused = !isPaused}>
    {isPaused ? '继续' : '暂停'}
  </button>
</aside>

<style>
  .sidebar {
    position: fixed;
    right: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background: rgba(75, 197, 235, 0.425);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 100;
  }

  .sidebar h3 {
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .pause-btn {
    padding: 12px 24px;
    background: linear-gradient(90deg, #00d4ff, #7b2ff7);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
  }

  .pause-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.8);
  }

  .pause-btn:active {
    transform: scale(0.98);
  }
</style>
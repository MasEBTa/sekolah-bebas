<template>
  <header class="main-header">
    <!-- Header Bar -->
    <div class="header-bar">
      <div class="left">
        <i class="bi bi-arrow-left"></i>
        <span class="logo-text">LOGO</span>
      </div>
      <div class="right">
        <i class="bi bi-arrow-bar-up"></i>
      </div>
    </div>

    <!-- Bullet Slider -->
    <div class="bullet-container">
      <div class="bullets">
        <span v-for="n in 6" :key="n" class="dot"></span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  background: linear-gradient(to right, #000000, #373bff);
  border-radius: 0 0 1rem 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
}

/* Header bar */
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-family: "woblofont", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
}

.right i {
  font-size: 1rem;
}

/* Bullet slider */
.bullet-container {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.bullets {
  display: flex;
  gap: 0.5rem;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dot {
  width: 12px;
  height: 12px;
  background-color: green; /* abu tua */
  border-radius: 9999px;
}
</style>

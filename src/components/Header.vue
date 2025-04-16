<template>
  <header
    class="navbar custom-gradient px-4 py-3 d-flex justify-content-between align-items-center shadow"
  >
    <div class="container">
      <a
        class="navbar-brand rounded-circle"
        href="#"
        style="background-color: white; width: 50px; height: 50px"
      >
        <img
          src="../assets/flat_750x_075_f-pad_750x1000_f8f8f8.u1-removebg-preview.png"
          alt="Bootstrap"
          width="100%"
          height="100%"
        />
      </a>
      <div class="nav justify-content-center text-white logofont">Tpq</div>
      <div></div>
    </div>
  </header>
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    to right,
    black,
    #4f46e5,
    #4338ca
  ); /* Gradient dari hitam ke indigo */
}
.logofont {
  font-family: "woblofont", sans-serif;
  font-size: 2rem;
}
@font-face {
  font-family: "woblofont";
  src: url("../assets/fonts/logo-font/super-woobly-font/SuperWoobly-8MJlz.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>

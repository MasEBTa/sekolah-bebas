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
      <div>
        <!-- Button trigger modal -->
        <i
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="bi bi-menu-button-fill menu"
        ></i>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Pilih Pelajaran
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Bahasa Arab
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Bahasa Jepang
              </button>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    to right,
    black,
    #18175f,
    #3533cb
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

.menu {
  color: aliceblue;
}
/* Saat di-hover */
.menu:hover {
  color: #b56e3f;
}
</style>

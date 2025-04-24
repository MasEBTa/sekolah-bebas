<template>
  <div class="card shadow mt-2 isimateri">
    <div class="card-body d-flex wrapper">
      <div class="left">
        <div class="gbr">
          <img src="/img/barab/leveldetail/level1/ا و ب.png" alt="cover" />
        </div>
      </div>
      <div class="right d-flex flex-column">
        <div class="atas flex-grow-1">
          <h1>Iqra 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut
            ex in quaerat cupiditate consectetur molestias voluptates, eaque
            asperiores quo nostrum id accusantium eum amet iure eos debitis, ad
            quidem.
          </p>
        </div>
        <div class="bawah d-flex justify-content-between">
          <span>30/100</span>
          <div class="pelajari main-bg-col">pelajari</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --bs-card-spacer-y: 0.5rem;
  --bs-card-spacer-x: 0.5rem;
}
.isimateri {
  border-radius: 1rem;
}
.isimateri .left {
  flex: 1;
  margin-right: 0.5rem;
  max-width: 10rem;
  /* min-height: 100%; */
  min-height: 5rem;
}
.isimateri .left .gbr {
  width: 100%;
  height: 100%;
  max-height: 7rem;
  overflow: hidden;
  border-radius: 1rem;
  background: red;
}
.gbr img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.isimateri .right {
  flex: 2;
  max-height: 7rem;
}
.right .atas {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Ganti angka 3 sesuai jumlah baris yang kamu mau */
  -webkit-box-orient: vertical;

  /* Tambahan untuk dukungan standar modern */
  line-clamp: 3;
  box-orient: vertical;
}
.atas h1 {
  font-size: 1rem;
  margin-bottom: 0;
}
.atas p {
  font-size: 0.8rem;
}
.bawah span {
  color: rgb(255, 65, 40);
}
.bawah .pelajari {
  padding: 0.3rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: ghostwhite;
}
</style>

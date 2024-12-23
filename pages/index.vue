<script setup>
const { data } = await useAsyncData("index", () => queryContent("/").findOne());
</script>
<template>
  <div id="tooplate_main">
    <div id="index" class="main_box">
      <div>
        <h1>Welcome to Official Site</h1>
        <img
          :src="data.images.photo92"
          alt="image"
          class="img_frame img_float_l"
          width="221px"
          height="200px"
        />
        <p align="justify" style="text-align: right">
          <em>
            <span v-for="line in data.quoteHeydar" :key="line"> {{ line }} <br /> </span>
          </em>
        </p>

        <hr />
        <p align="justify"></p>
        <h5>
          Famous Mathematician from Azerbaijan he has made great contribution in the sphere of
          Mathematics.
        </h5>

        <h5>Full CV can be downloaded as</h5>

        <a href="/pdf/vagifguliyev_cv.pdf" target="_blank" title="PDF File CV Vagif Guliyev">
          <img :src="data.images.downloadpdfbutton1" height="60px" width="60px" />
        </a>

        <h3>
          <em>Useful Links</em>
        </h3>

        <div class="column-images">
          <a href="http://bsu.edu.az/en/" target="_blank"
            ><img :src="data.images.bakuuniversity"
          /></a>
          <a href="https://ahievran.edu.tr/" target="_blank"
            ><img :src="data.images.ahievran" />
          </a>

          <a
            href="http://www.rudn.ru/science/research-institutes/matematicheskiy-institut-im-s-nikolskogo"
            target="_blank"
            ><img :src="data.images.rudn" />
          </a>
          <div class="row">
            <a href="http://www.science.gov.az/forms/chlenyikorrespondentyi/1364" target="_blank"
              ><img :src="data.images.amea"
            /></a>
            <a
              href="http://www.imm.az/exp/jubilees/corresponding-member-of-anas-vagif-guliyev-is-60/?lang=en"
              target="_blank"
              class="vagif-and-imea"
              ><img :src="data.images.VagifGuliyev60yubiley" /><img :src="data.images.imea"
            /></a>
          </div>
        </div>

        <div class="cleaner h40"></div>
      </div>
      <div class="cleaner h40"></div>
    </div>
  </div>
</template>

<style scoped>
.column-images {
  display: flex;
  flex-direction: column;
  width: 550px;
  position: relative;
}

.column-images .row {
  display: flex;
  flex-direction: row;
}

.column-images img {
  width: 100%;
}

.column-images .vagif-and-imea {
  display: flex;
  justify-content: center;
}
</style>

<script setup>
import { ref } from "vue";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Swiper event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

// Swiper modules
const modules = [Navigation, Pagination, Scrollbar, A11y];

const { data } = await useAsyncData("photo", () => queryContent("/photo").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="photo" class="main_box">
      <h1 class="photo">Photos</h1>

      <ContentDoc />

      <div class="demo-gallery">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="img in data.images" :key="img">
            <img :src="img" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 20px;
}
</style>

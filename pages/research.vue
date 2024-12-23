<script setup>
const { data } = await useAsyncData("research", () => queryContent("/research").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="research" class="main_box">
      <h1>Research</h1>

      {{ data.researchTitle }}
      <ul>
        <li v-for="research in data.researchList" :key="research">
          {{ research }}
        </li>
      </ul>
      <img :src="data.researchHeroImage" alt="image" class="img_float_r img_frame" />

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("press", () => queryContent("/press").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="press" class="main_box">
      <h1>Press</h1>

      <ContentDoc />

      <iframe
        v-for="src in data.videos"
        :key="src"
        width="560"
        height="315"
        :src="src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("awards_projects", () =>
  queryContent("/awards_projects").findOne()
);
</script>

<template>
  <div id="tooplate_main">
    <div id="awards_projects" class="main_box">
      <h1>Awards, Honours and Projects</h1>

      <img v-for="img in data.images" :key="img" :src="img" class="img_float_r img_frame" />

      <ContentDoc />
      <div class="cleaner"></div>
    </div>
  </div>
</template>

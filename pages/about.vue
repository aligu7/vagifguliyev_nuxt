<script setup>
const { data } = await useAsyncData("about", () => queryContent("/about").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="about" class="main_box">
      <h1>About</h1>

      <img :src="data.vagifguliyev94" alt="image" class="img_float_r img_frame" />

      <ul>
        <li v-for="line in data.aboutList" :key="line">
          {{ line }}
        </li>
      </ul>

      <div class="cleaner h40"></div>
      <div class="col_12 float_l">
        <h3><em>Area of Interest</em></h3>
        <ul>
          <li style="margin-bottom: 10px" v-for="area in data.areaOfInterest" :key="area">
            <cite v-if="area.bold">{{ area.text }}</cite>
            <i v-else>{{ area.text }}</i>
          </li>
        </ul>
      </div>
      <div class="col_12 float_r">
        <h3><em>Official Recommendations</em></h3>
        <ul class="tooplate_list">
          <li v-for="recommendation in data.officialRecommendations" :key="recommendation">
            <img :src="recommendation.personImg" alt="image" class="img_float_r img_frame" />
            <a :href="recommendation.nameLink" target="_blank" rel="nofollow">
              <em
                ><strong>{{ recommendation.name }}</strong>
              </em>
            </a>
            <div v-for="line in recommendation.description" :key="line">{{ line }} <br /></div>
            <div v-if="recommendation.externalLink">
              <em>
                <a style="color: white" target="_blank" :href="recommendation.externalLink.url">{{
                  recommendation.externalLink.text
                }}</a>
              </em>
              <br />
            </div>
            <a
              v-for="pdf in recommendation.pdfs"
              :key="pdf.title"
              target="_blank"
              :title="pdf.title"
              :href="pdf.url"
            >
              <img :src="pdf.img" height="60px" width="60px" />
            </a>
          </li>
        </ul>
      </div>
      <div class="cleaner"></div>
      <a href="#tooplate_main" class="gototop">Go To Top</a>
      <div class="cleaner"></div>
    </div>
  </div>
</template>

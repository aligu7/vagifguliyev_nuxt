<script setup>
const { data } = await useAsyncData("contact", () => queryContent("/contact").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="contact" class="main_box">
      <h1>Contact Page</h1>

      <div class="col_12 float_l">
        <h4>Map</h4>
        <div id="contact_form">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12158.190594825888!2d49.80116537604634!3d40.374553443140144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2sBaku%20State%20University!5e0!3m2!1sen!2str!4v1740248830727!5m2!1sen!2str"
            width="250" height="250" frameborder="0" style="border: 0" allowfullscreen></iframe>

          <br /><small>
            <a :href="data.links.mapLocation" target="_blank">View Larger Map</a>
          </small>
          <div class="cleaner h30"></div>
          <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_EN" data-type="vertical"
            data-theme="dark" data-vanity="vagif-guliyev-71856a70">
            <a class="LI-simple-link" :href="data.links.linkedin" target="_blank">Vagif Guliyev</a>
          </div>
        </div>
        <div style="font-weight: bold; margin-top: 15px">
          <a :href="data.links.twitter" class="twitter-follow-button" data-show-count="false">Follow @ProfVagifG</a>
        </div>
      </div>

      <div class="col_12 float_r">
        <ContentDoc />
      </div>

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<style>
#contact p {
  margin: 0;
}
</style>

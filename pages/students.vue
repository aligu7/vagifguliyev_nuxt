<script setup>
const { data } = await useAsyncData("students", () => queryContent("/students").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="students" class="main_box">
      <h1>PhD and Doctorate Students</h1>

      <a class="title" href="#_20-phd-students"><em>20 Ph.D. students</em></a>

      <ol>
        <li v-for="student in data.students.phd" :key="student.name">
          <span>{{ student.name }}</span>
          <span>{{ student.content }}</span>
          <span>{{ student.date }}</span>
        </li>
      </ol>

      <a class="title" href="#_20-phd-students"><em>5 Doctorate students</em></a>

      <ol>
        <li v-for="student in data.students.doctorate" :key="student.name">
          <span>{{ student.name }}</span>
          <span>{{ student.content }}</span>
          <span>{{ student.date }}</span>
        </li>
      </ol>

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<style scoped>
ol li {
  margin-bottom: 15px;
}

ol li span {
  display: block;
}

a.title {
  font-size: 20px;
}
</style>

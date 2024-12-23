<script setup>
const { data } = await useAsyncData("titles", () => queryContent("/titles").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="titles" class="main_box">
      <h1>Academic Titles & Work Experience</h1>

      <table style="width: 700px">
        <tr>
          <th v-for="topRowEl in data.titlesTable.topRow" :key="topRowEl">
            {{ topRowEl }}
          </th>
        </tr>
        <tr v-for="dataRowEl in data.titlesTable.dataRows" :key="dataRowEl">
          <td>{{ dataRowEl.year }}</td>
          <td>{{ dataRowEl.title }}</td>
          <td>
            <span v-for="line in dataRowEl.university" :key="line"> {{ line }} <br /> </span>
          </td>
        </tr>
      </table>

      <img :src="data.image" class="img_float_r img_frame" />

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
}
</style>

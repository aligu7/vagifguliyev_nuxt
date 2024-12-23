<script setup>
const { data } = await useAsyncData("education", () => queryContent("/education").findOne());
</script>

<template>
  <div id="tooplate_main">
    <div id="education" class="main_box">
      <h1>Education</h1>

      <table style="width: auto">
        <tr>
          <th v-for="topRowEl in data.educationTable.topRow" :key="topRowEl">
            {{ topRowEl }}
          </th>
        </tr>
        <tr v-for="dataRowEl in data.educationTable.dataRows" :key="dataRowEl">
          <td>{{ dataRowEl.degree }}</td>
          <td>{{ dataRowEl.department }}</td>
          <td>
            {{ dataRowEl.dissertation_thesisTitle }}
            <span v-if="dataRowEl.formula"
              ><i
                >{{ dataRowEl.formula.base }}<sup>{{ dataRowEl.formula.powerOf }}</sup></i
              ></span
            >
          </td>
        </tr>
      </table>
      <img v-for="img in data.images" :key="img" :src="img" class="img_float_r img_frame" />

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

th {
  text-align: left;
}
</style>

<script setup lang="ts" name="App">
import {
  Ref,
  ref,
  onMounted, // 组件挂载完成
} from "vue";

const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const lists: Ref<Array<string>> = ref<Array<string>>([]);
const getLists = (num: number) => {
  for (let i = 0; i < num; i++) {
    const r = getRandom(0, 255);
    const g = getRandom(0, 255);
    const b = getRandom(0, 255);
    lists.value.push(`rgb(${r},${g},${b})`);
  }
};

onMounted(() => {
  getLists(10);
});
</script>

<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in lists"
      :key="index"
      :style="{ 'background-color': item }"
      v-slide-in="{ distance: 300, duration: 500 }"
    >
      {{ index }}
    </div>
  </div>
</template>
<style scoped>
.item {
  height: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  font-weight: bold;
}
</style>

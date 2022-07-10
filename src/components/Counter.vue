<template>
  <div>
    <span class="title text-40">
      {{ counter.count }}
    </span>
    <button
      class="rounded bg-teal-700 text-white text-center active-bg-teal-800"
      @tap="onAdd"
    >
      <text class="text-35">
        增加
      </text>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

const onAdd = () => {
  counter.count++
}
</script>

<style>
.title {
  font-size: 32px;
}

</style>

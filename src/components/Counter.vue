<template>
  <view>
    <text class="title">
      {{ counter.count }}
    </text>
    <button
      class="rounded bg-teal-700 text-white text-center active-bg-teal-800"
      @tap="onAdd"
    >
      ADD
    </button>
  </view>
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

<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <view class="button" @tap="onAdd">ADD</view>
  </view>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

const onAdd = () => {
  counter.count++

  // with autocompletion ✨
  // counter.$patch({count: counter.count + 1})

  // or using an action instead
  // counter.increment()
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>

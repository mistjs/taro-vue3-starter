<template>
  <view class="index p-40">
    <Counter />
    <button @click="handleClick">
      请求
    </button>
    {{ requestData }}
  </view>
</template>

<script lang="ts" setup>
import './index.less'
import { useGet } from '../../utils/request'
const requestData = shallowRef()
const handleClick = async() => {
  requestData.value = await useGet('/test/200')
}
</script>

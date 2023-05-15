<template>
  <p>
    设置你的一些信息...
  </p>
</template>

<script setup>
  definePageMeta({
    middleware: ["auth"]
  })
</script>

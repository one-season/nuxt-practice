<template>
  <div class="page">
    <h2>首页</h2>
  </div>
</template>

<script setup>
  // 设置HTML中Head标签的全部内容
  useHead({
    title: "这是网站的标题",
    viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
    meta: [
      { name: "keywords", content: "这是网站的关键字" },
      { name: "description", content: "这是网站的一段很长很长很长很长很长的描述" },
    ]
  })
</script>

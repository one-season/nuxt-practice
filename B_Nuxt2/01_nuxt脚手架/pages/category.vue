<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  // 1.2.1 局部应用的路由中间件
  // middleware: "auth"
  middleware() {
    console.log('part middleware');
  }
}
</script>
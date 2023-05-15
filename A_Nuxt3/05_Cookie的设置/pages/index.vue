<template>
  <div class="page">
    <h2>{{ counter}}</h2>

    <button @click="counter = null">reset</button>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
  /**
   * 下面的例子创建了一个名为counter的cookie。如果cookie不存在，它最初会被设置为一个随机值。
   * 每当我们更新counter变量时，cookie也会相应更新。
   * 
   *  maxAge / expires：
   *    * maxAge 指定number(秒)作为Max-Age Set-Cookie属性的值。
   *    * expires 指Date对象为Expires Set-Cookie属性的值。
   *      - 声明expires和 设置了maxAge ，那么maxAge优先，但不是所有的客户端都可以遵守这个，因此，如果两个都设置了，
   *      它们应该指向相同的日期和时间!
   *      - 如果expires和maxAge都没有设置，cookie将是会话专用的，并在用户关闭浏览器时删除。
   * 
   *  httpOnly：
   *    * 这算是一个安全设置，如果把httpOnly设置为true，可以对最常见的XSS攻击起到防范作用。
   *    什么是HttpOnly？ HttpOnly是包含在http返回头Set-Cookiew里面的一个附件的flag，所以它是后端服务器对cookie设置
   *    的一个附件属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问收保护cookie的风险。
   * 
   *  secure：
   *    * 这也是一个安全设置，如果你的网址不是HTTPS的，并且把secure的值设置为true，那Cookie的值就不会传递给服务端。
   *      总的来说还是一个为了服务器安全的设置。
   */
  const counter = useCookie('counter', {
    maxAge: 5,
    httpOnly: true,
    secure: true
  });
  console.log(counter);
  counter.value = counter.value || Math.round(Math.random() * 1000)
</script>

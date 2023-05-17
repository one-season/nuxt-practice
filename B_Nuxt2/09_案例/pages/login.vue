<template>
  <div>
    <h2>欢迎登录</h2>

    <input type="text" v-model="username" />
    <input type="text" v-model="password" />

    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
  import qs from "qs";
  import { mapMutations } from "vuex";

  export default {
    data() {
      return {
        username: 'test',
        password: 'admin123'
      }
    },
    methods: {
      ...mapMutations(['changeToken']),
      async handleLogin() {
        const data = qs.stringify({
          username: this.username,
          password: this.password
        });

        const res = await this.$axios('/api/u/loginByJson', {
          method: 'post',
          data
        });
        console.log('login.vue: ', res);

        this.changeToken('yeowqiuhnkjdsahijhfduysiyu18045ewqe12fd1vbcb');
        setTimeout(() => {
          this.$router.replace('/');
        }, 1000)
      }
    }
  }
</script>
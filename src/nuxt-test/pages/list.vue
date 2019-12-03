<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">My top-notch Nuxt.js project</h2>
      <div class="links">
        <a href="./detail" target="_blank" class="button--green">goDetail</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import api from "@/utils/api";

export default {
  components: {
    Logo
  },
  data() {
    return {
      title: ""
    };
  },
  asyncData(ctx) {
    try {
      console.log(ctx.app);
    } catch (err) {
      ctx.$errorHandler(err);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    this.getTest();
  },
  methods: {
    getTest() {
      api
        .list({
          appId: "609381314952429568",
          pageIndex: 1,
          pageSize: 10000,
          terminal: 1
        })
        .then(res => {
          this.title = res.name;
          console.log(res);
        })
        .catch(res => {
          this.$toast.error(res.message);
        });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

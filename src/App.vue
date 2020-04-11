<template>
  <div id="app">
    <HelloWorld msg="hello组件" />
    <News :msg="msg" @add-feature="onAddFeature" />
    <el-form ref="loginForm"></el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import News from "./views/News/index.vue";
import moment from "moment";
import { Feature } from "@/types";
import { Form } from "element-ui";

@Component({
  components: {
    HelloWorld,
    News
  }
})
export default class App extends Vue {
  msg = moment().format("YYYY/MM/DD");

  @Ref() loginForm!: Form;

  onAddFeature(f: Feature) {
    console.log("===========", f.name);
  }
  onSubmit() {
    this.loginForm.validate().then(isValid => {
      console.log(isValid);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

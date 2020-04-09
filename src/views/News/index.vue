<template>
  <div>
    <input type="text" placeholder="输入新特性" @keyup.enter="addFeature" />
    <ul>
      <li v-for="item in features" :key="item.id">{{item.name}}</li>
      <li>共：{{counter}}条</li>
    </ul>
    {{msg}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, Watch } from "vue-property-decorator";
import { Feature } from "@/types";
import { getFeatures } from "@/api/feature";

@Component
export default class News extends Vue {
  @Prop({ type: String, required: false })
  msg!: string;

  features: Feature[] = [];

  @Emit()
  addFeature(e: KeyboardEvent): void {
    const inp = e.target as HTMLInputElement;
    this.features.push({ id: this.features.length + 1, name: inp.value });
    inp.value = "";
  }

  async created() {
    // getFeatures().then(res => {
    //   this.features = res.data;
    // });
    const { data } = await getFeatures();
    this.features = data;
    // this.features = [
    //   { id: 1, name: "类型注解1" },
    //   { id: 2, name: "编译型语言1" }
    // ];
  }

  get counter(): number {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>

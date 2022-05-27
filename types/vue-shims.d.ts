
declare module "*.vue" {
  import { Component } from "vue/types/options";
  const component: Component;
  export default component;
}

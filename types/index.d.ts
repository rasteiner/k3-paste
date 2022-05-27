import { PluginFunction } from "vue/types/plugin";

type PluginConfig = {
  components?: {
    [name: string]: any
  };
  use?: PluginFunction<unknown>[];
  blocks?: any;
  fields?: any;
  icons?: any;
  sections?: any;
  login?: any;
  created?: any;
  thirdParty?: any;
};

type Panel = {
  plugin: (name: string, config: PluginConfig) => void;
};

declare global {
  const panel: Panel;
}


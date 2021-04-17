<template>
  <el-button 
    :type="property.type" 
    :plain="plain"
    :icon="icon"
    @click="onClick"
  >
    {{property.text}}
  </el-button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "el-icon-edit"
    },
    property: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      data: "我是a组件",
    };
  },
  mounted() {
   
  },
  methods: {
    onClick() {
       //console.log(this.property.text);
    }
  },
};
</script>
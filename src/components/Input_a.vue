<template>
  <el-input
    :type="type" 
  >
    Primary
  </el-input>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
  },
  data() {
    return {
      data: "我是a组件",
    };
  },
};
</script>
<template>
  <el-button 
    :type="type" 
    :plain="plain"
    :icon="icon"
    :loading="loading"
  >
    Primary
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
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: "我是a组件",
    };
  },
};
</script>
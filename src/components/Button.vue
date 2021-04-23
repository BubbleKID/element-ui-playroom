<template>
  <el-button 
    :type="property.type" 
    :size="property.size" 
    :plain="plain"
    :icon="icon"
    :isSelected="false"
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
    size: {
      type: String,
      default: "medium"
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
    isSelected: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
       
    };
  },
  mounted() {
   
  },
  methods: {
    onClick() {
       //console.log(this.property.text);
    }
  },
  watch: {
    isSelected: function () {
      console.log('vvvv');
    },
  }
};
</script>
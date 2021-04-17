<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Text">
      <el-input v-model="text"></el-input>
    </el-form-item>
    <el-form-item label="Type">
      <el-select v-model="type" placeholder="Select">
        <el-option
          v-for="item in ['primary', 'success']"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <!-- <el-input v-model="form.buttonType"></el-input> -->
    </el-form-item>
  </el-form>
</template>

<script>
import store from "./../store";

export default {
  store,
  data() {
    return {
      selected: this.$store.state.selected,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        buttonType: ''
      },
    };
  },
  computed: {
   text: {
      get () {
        return this.$store.state.layout[this.$store.state.selected].property.text
      },
      set (value) {
        this.$store.commit('updateText', value)
      } 
    },
    type: {
      get () {
        return this.$store.state.layout[this.$store.state.selected].property.type
      },
      set (value) {
        this.$store.commit('updateType', value)
      } 
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
  mounted: function (){
  }
};
</script>
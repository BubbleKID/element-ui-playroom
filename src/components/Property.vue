<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Component Id">
      <span>{{componentId}}</span>
    </el-form-item>
    <el-form-item label="Text">
      <el-input v-model="text"></el-input>
    </el-form-item>
    <el-form-item label="Type">
      <el-select v-model="type" placeholder="Select">
        <el-option
          v-for="item in ['primary', 'success', 'info', 'warning', 'danger']"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <!-- <el-input v-model="form.buttonType"></el-input> -->
    </el-form-item>
    <el-form-item label="Size">
      <el-select v-model="size" placeholder="Select">
        <el-option
          v-for="item in ['medium', 'small', 'mini']"
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
        type: '',
        resource: '',
        desc: '',
        buttonType: '',
        size: ''
      },
    };
  },
  computed: {
   text: {
      get () {
        if(this.$store.state.selected === -1) {
          return '';
        }
        return this.$store.state.layout[this.$store.state.selected].property.text
      },
      set (value) {
        if(this.$store.state.selected !== -1) {
          this.$store.commit('updateText', value);
        }
        
      } 
    },
    type: {
      get () {
        if(this.$store.state.selected === -1) {
          return '';
        }
        return this.$store.state.layout[this.$store.state.selected].property.type
      },
      set (value) {
        this.$store.commit('updateType', value)
      } 
    },
    size: {
      get () {
        if(this.$store.state.selected === -1) {
          return '';
        }
        return this.$store.state.layout[this.$store.state.selected].property.size
      },
      set (value) {
        this.$store.commit('updateSize', value)
      } 
    },
    componentId: {
      get () {
        if(this.$store.state.selected === -1) {
          return '';
        }
        return this.$store.state.selected 
      },
      set (value) {
        this.$store.commit('updateSelected', value)
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
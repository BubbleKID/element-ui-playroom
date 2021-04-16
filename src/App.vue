<template>
  <div class="drag-wrapper"> 
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Export</el-menu-item>
    </el-menu>
    <el-row :gutter="20" >
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="2" @click="addComponent('Button')">
            <span>Button</span>
          </el-menu-item>
          <el-menu-item index="3" @click="addComponent('Input')">
            <span>Input</span>
          </el-menu-item>
          <el-menu-item index="4" @click="addComponent('Table')">
            <span>Table</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16" class="blueprint">
        <grid-layout :layout.sync="layout" :auto-size="false" style="min-height: 1024px;" 
          :col-num="12"
          :row-height="10"
          :is-draggable="draggable"
          :is-resizable="resizable"
          :responsive="false"
          :vertical-compact="false"
          :prevent-collision="true"
          :use-css-transforms="true"
        >
          <grid-item v-for="(item) in layout" v-bind:key="item.i"  
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <component :is="item.component"></component>
            <span class="remove" @click="removeItem(item.i)">x</span>
          </grid-item>
        </grid-layout>
      </el-col>
      <el-col :span="4">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type"></el-checkbox>
              <el-checkbox label="Promotion activities" name="type"></el-checkbox>
              <el-checkbox label="Offline activities" name="type"></el-checkbox>
              <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor"></el-radio>
              <el-radio label="Venue"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Input_a from "./components/Input_a.vue";
import Table from "./components/Table.vue";
import { GridLayout, GridItem } from "./components/";

export default {
  name: 'App',
  components: {
    GridLayout,
    GridItem,
    Button,
    Input_a,
    Table
  },
  data() {
    return {
      selected: null,
      layout: [
          {"x":0,"y":0,"w":2,"h":2,"i":"0", static: false, component: Button},
          {"x":2,"y":0,"w":2,"h":4,"i":"1", static: false,  component: Input_a},
      ],
      componentNumber: 2,
      draggable: true,
      resizable: true,
      index: 0,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      activeIndex: 'Workspace'
    }
  },
  methods: {
    handleDragstart() {
      // save drag element:
      // this.dragItemId = e.target.id();
      // // move current element to the top:
      // const item = this.list.find(i => i.id === this.dragItemId);
      // const index = this.list.indexOf(item);
      // this.list.splice(index, 1);
      // this.list.push(item);
    },
    handleDragend() {
      this.dragItemId = null;
    },
    onSubmit() {
      console.log('submit!');
    },
    handleOpen() {
      console.log('submit!');
    },
    handleClose() {
      console.log('submit!');
    },
    itemTitle(item) {
      let result = item.i;
      if (item.static) {
          result += " - Static";
      }
      return result;
    },
    handleSelect() {

    },
    removeItem: function (val) {
        const index = this.layout.map(item => item.i).indexOf(val);
        this.layout.splice(index, 1);
    },
    addItem: function () {
      // Add a new item. It must have a unique key!
      this.layout.push({
          x: (this.layout.length * 2) % (this.colNum || 12),
          y: this.layout.length + (this.colNum || 12), // puts it at the bottom
          w: 2,
          h: 2,
          i: this.index,
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    addComponent(component) {
      this.layout.push({
        "x":0,
        "y":0,
        "w":2,
        "h":2,
        "i":this.componentNumber, 
        static: false, 
        component: component
      });
      this.componentNumber++;
    },
    onFocus() {
      debugger
      
    }
  },
  mounted() {
     
  },
}
</script>

<style>
.remove {
    position: absolute;
    right: 2px;
    top: 0;
    cursor: pointer;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}

.blueprint {
  background-color:#4990e2;
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
  background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px
}
</style>

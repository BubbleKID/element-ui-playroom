<template>
  <div class="drag-wrapper"> 
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Export html</el-menu-item>
      <el-menu-item index="2">View: Design</el-menu-item>
       <el-menu-item index="3">View: Code</el-menu-item>
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
      <el-col :span="16" >
        <el-tabs type="card">
          <el-tab-pane label="Design" class="blueprint">
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
                :componentId="item.i"
              >
                <component :is="item.component" :property="item.property"></component>
                <span class="remove" @click="removeItem(item.i)">{{item.i}}: x</span>
              </grid-item>
            </grid-layout>
          </el-tab-pane>
          <el-tab-pane label="Code">
            <pre v-highlightjs>
                <code class="javscript">
                   {{code}}
                </code>
            </pre>
          </el-tab-pane>
        </el-tabs>
       
      </el-col>
      <el-col :span="4">
        <Property></Property>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from "./store";
import Button from "./components/Button.vue";
import Input_a from "./components/Input_a.vue";
import Table from "./components/Table.vue";
import Property from "./components/Property.vue";
import { GridLayout, GridItem } from "./components/";

export default {
  name: 'App',
  components: {
    GridLayout,
    GridItem,
    Button,
    Input_a,
    Table,
    Property
  },
  store,
  data() {
    return {
      selected: null,
      layout: this.$store.state.layout,
      componentNumber: 2,
      draggable: true,
      resizable: true,
      index: 0,
      activeIndex: 'Workspace',
      code: "let aa 'bbb';"
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
        component: component,
        property: null
      });
      this.componentNumber++;
    },
    onFocus() {
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

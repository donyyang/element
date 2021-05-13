<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'ElMenuItemGroup',

    componentName: 'ElMenuItemGroup',

    inject: ['rootMenu'],
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        // paddingLeft: 20
        paddingLeft: 16
      };
    },
    computed: {
      levelPadding() {
        // let padding = 20;
        let padding = this.paddingLeft;
        let parent = this.$parent;
        // if (this.rootMenu.collapse) return 20;
        if (this.rootMenu.collapse) return this.paddingLeft;
        while (parent && parent.$options.componentName !== 'ElMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            // padding += 20;
            padding += this.paddingLeft;
          }
          parent = parent.$parent;
        }
        return padding;
      }
    }
  };
</script>


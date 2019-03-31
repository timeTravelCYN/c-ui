<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName !== 'BUTTON') {
        console.warn(`不要写入初 c-button 外的其他元素, 你写的是 ${node.nodeName}`)
      }
    }
  },
};
</script>

<style lang="scss">
.c-button-group {
  vertical-align: top;
  display: inline-flex;
  > .c-button {
    &:not(:first-child) {
      margin-left: -1px;
    }
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative; z-index: 1;
    }
  }
}
</style>

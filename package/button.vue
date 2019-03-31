<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg
      v-if="icon"
      class="icon"
      aria-hidden="true"
    >
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
    <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator: value => {
        // 防止用户传 up，bottom
        return ['left', 'right'].includes(value)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .9em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: top; // 内联元素对不齐
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    margin-right: .3em;
    order: 1;
  }
  > .content {
    order: 2
  }
  &.icon-right {
    > .icon {
      margin-right: 0em;
      margin-left: .3em;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  // vertical-align: -0.15em;
  // fill: currentColor;
  // overflow: hidden;
}
</style>
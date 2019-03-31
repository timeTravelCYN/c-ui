<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
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
    loading: {
      type: Boolean,
      default: false
    },
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
@keyframes spin {
  0% { transform: rotate(0deg)};
  100% {transform: rotate(360deg)};
}
.loading {
  animation: spin 2s infinite linear;
}
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

</style>
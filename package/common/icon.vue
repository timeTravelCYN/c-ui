<template>
  <svg
    class="c-icon"
    aria-hidden="true"
  >
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>
<style lang="scss" scoped>
.c-icon {
  width: 1em;
  height: 1em;
}
</style>

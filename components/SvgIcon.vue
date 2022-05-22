<template>
    <svg
      :class="svgClass"
      aria-hidden="true"
      :style="{ width: width, height: height }"
    >
      <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {


  name: 'SvgIcon',
  props: {
    width: {
      type: String,
      default: '1rem'
    },
    height: {
      type: String,
      default: '1rem'
    },
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${

        this.iconClass}`
    },
    svgClass () {
      return this.className ? 'svg-icon ' + this.className : 'svg-icon'
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  font-size: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

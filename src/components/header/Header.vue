<template>
  <div class="header" :style="backgroundStyle"
    v-if="components.header.error || components.header.info">
    <error-component v-if="components.header.error"></error-component>
    <info-component v-if="components.header.info"></info-component>
  </div>
</template>

<script>
  import { mapState } from 'redux-vuex'

  import InfoComponent from './Info'
  import ErrorComponent from './Error'

  export default {
    data: mapState('theme', 'components'),
    computed: {
      backgroundStyle () {
        return {
          'background-color': this.theme.player.background
        }
      }
    },
    components: {
      InfoComponent,
      ErrorComponent
    }
  }
</script>

<style lang="scss">
  @import '~styles/variables';

  .header {
    padding: 0 $padding;
    overflow: hidden;
  }
</style>

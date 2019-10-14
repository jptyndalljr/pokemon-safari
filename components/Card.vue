<template>
  <div class="column">
    <div class="card" :class="background">
      <header class="card-header">
        <p class="card-header-title has-text-white has-text-centered">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <!-- <b-icon :icon="icon" size="is-large" type="is-primary" /> -->
          <img :src="ball" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test: `require(~assets/images/poke-ball.png)`
    }
  },
  computed: {
    ball() {
      if (this.icon === 'poke') {
        const url = require('../assets/images/poke-ball.png')
        return url
      } else if (this.icon === 'great') {
        const url = require('../assets/images/great-ball.png')
        return url
      } else if (this.icon === 'ultra') {
        const url = require('../assets/images/ultra-ball.png')
        return url
      } else if (this.icon === 'premier') {
        const url = require('../assets/images/premier-ball.png')
        return url
      } else if (this.icon === 'master') {
        const url = require('../assets/images/master-ball.png')
        return url
      } else if (this.icon === 'safari') {
        const url = require('../assets/images/safari-ball.png')
        return url
      } else {
        return ''
      }
    },
    background() {
      return this.icon + '-ball'
    }
  }
}
</script>

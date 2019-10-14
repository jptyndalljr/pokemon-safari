<template>
  <div>
    <nav
      class="navbar header is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-title" to="/">
          <img
            src="~assets/images/safari-ball.png"
            alt="Pokemon Web Safari"
            height="28"
          />
          <h1>Pokémon Web Safari</h1>
        </nuxt-link>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div v-for="(item, key) of items" :key="key" class="navbar-item">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

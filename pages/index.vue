<template>
  <section class="section">
    <button class="button is-primary" @click="writeToFirestore()">
      Write to Firestore
    </button>
    <div class="columns is-mobile pokeball-cards">
      <!-- Pokeball card -->
      <card title="Poké Ball" icon="poke">
        Open x1
      </card>
      <!-- Greatball card -->
      <card title="Great Ball" icon="great">
        Open x1
      </card>
      <!-- Ultraball card -->
      <card title="Ultra Ball" icon="ultra">
        Open x1
      </card>
      <!-- Premierball Card -->
      <card title="Premier Ball" icon="premier">
        Open x1
      </card>
      <!-- Masterball card -->
      <card title="Master Ball" icon="master">
        Open x1
      </card>
      <!-- Safariball card -->
      <card title="Safari Ball" icon="safari">
        Open x1
      </card>
    </div>
    <div class="columns is-mobile"></div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  methods: {
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firestore rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        const messageDoc = await messageRef.get()
        alert(messageDoc.data().message)
      } catch (e) {
        alert(e)
        // return
      }
    }
  }
}
</script>

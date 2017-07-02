<template>
  <div class="modals">
    <button @click="openModal('[new]')"></button>
  </div>
</template>

<script>
export default {
  name: 'modals',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openModal: function (list = '[new]') {
      this.$router.replace({ name: 'modals', params: { list: list } })
    }
  },
  beforeRouteLeave: function (to, from, next) {
    // next(false)
    next()
  }
}
</script>

<style>
</style>

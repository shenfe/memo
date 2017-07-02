<template>
  <div id="app">
    <div class="sidebar">
      <div class="sb-filter"></div>
      <div class="sb-result"></div>
    </div>
    <div class="main">
      <div class="mn-filter"></div>
      <div class="mn-result"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titleFilters: {
        text: '',
        sort1: 'createTime', // 'name'|'weight'|'createTime'|'modifyTime'
        sort2: 0, // 0|1
        view: 'list' // 'list'|'tree'
      },
      titleResult: [],
      postFilters: {
        pstFilterText: '',
        pstFilterKeywords: [],
        pstFilterSort1: 'createTime',
        pstFilterSort2: 0,
        pstFilterStyle: 'grid' // 'block'|'grid'|'inline'
      },
      postResult: []
    }
  },
  methods: {
    openModal: function (list = '[new]') {
      this.$router.push({ name: 'modals', params: { list: list } })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sidebar {}
.sb-filter {}
.sb-result {}
.main {}
.mn-filter {}
.mn-result {}
</style>

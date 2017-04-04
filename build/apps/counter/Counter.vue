
<template>
  <div id="app">
    点击：{{$store.state.count}}次！
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

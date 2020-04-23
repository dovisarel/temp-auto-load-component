<template>
  <div class="hello">
    <p>msg: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

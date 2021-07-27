<template>
  <router-link class="btn btn-outline-secondary" :to="to">
    <strong>{{ title }}</strong>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    to: {
      default: () => {},
      type: Object
    }
  }
}
</script>

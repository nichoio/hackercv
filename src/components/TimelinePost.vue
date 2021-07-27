<template>
  <h4>{{ title }} <small class="text-muted">{{ year }}</small></h4>
  <div class="timeline-post">
    {{ text }}
  </div>
</template>
<script>

export default {
  name: 'TimelinePost',
  props: {
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.timeline-post {
  font-size: 0.9em;
}
</style>


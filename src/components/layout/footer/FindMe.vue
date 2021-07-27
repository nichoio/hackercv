<template>
  <div class="d-flex justify-content-center">
    <span class="me-3">
      Find me:
    </span>

    <div v-if="content.link_github" class="link-icon mx-1">
      <a :href="content.link_github">
        <img class="img-fluid" src="./icons/github.svg">
      </a>
    </div>

    <div v-if="content.link_linkedin" class="link-icon mx-1">
      <a :href="content.link_linkedin">
        <img class="img-fluid" src="./icons/linkedin.png">
      </a>
    </div>

    <div v-if="content.link_stackoverflow" class="link-icon mx-1">
      <a :href="content.link_stackoverflow">
        <img class="img-fluid" src="./icons/stackoverflow.png">
      </a>
    </div>
  </div>
</template>

<script>
import content from '@/ressources/components/layout/footer/find_me.json'

export default {
  computed: {
    content: function () {
      return content
    }
  }
}
</script>


<style scoped lang="scss">
.link-icon {
  height: 27px;
  width: 27px;
  filter: $footer-icons;
  -webkit-filter: brightness(0) invert(0.7);
}

.link-icon:hover {
  filter: $footer-icons-hover;
  -webkit-filter: brightness(0) invert(0.9);
}
</style>

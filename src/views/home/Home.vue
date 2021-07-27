<template>
  <div>
    <div class="row d-flex justify-content-between">
      <div class="mb-5 col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 offset-md-3 offset-lg-0">
        <img class="img-fluid rounded-circle" :src="require(`@/assets/images/${content.avatarUrl}`)" alt="avatar">
      </div>
      <div class="col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
        <h2 class="mb-4">
          {{ content.title }}
        </h2>
        <p>
          {{ content.content }}
        </p>
        <CtaLink :title="content.ctaTitle" :to="{ name: 'CV' }" />
      </div>
    </div>

  </div>
</template>

<script>
import content from '@/ressources/views/home/content.json'

import CtaLink from '@/components/buttons/CtaLink'

export default {
  components: {
    CtaLink
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>

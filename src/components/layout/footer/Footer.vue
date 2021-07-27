<template>
  <footer class="container-fluid border-top text-center py-5">
    <Email class="mb-2" />
    <FindMe class="mb-4" />

    <div class="text-muted mb-4">
      Theme created with
      <a href="https://github.com/sebdei/hackercv">hackerCV</a>
      by Seb &#38; Nicho.
    </div>

    <router-link :to="{ name: 'Imprint' }">
      <small class="text-muted imprint">
        Imprint
      </small>
    </router-link>
  </footer>
</template>

<script>
import Email from './Email'
import FindMe from './FindMe'

export default {
  components: {
    Email,
    FindMe
  }
}
</script>

<style scoped lang="scss">
footer {
  background-color: $footer-background;
  color: $footer-text;
}

a, .imprint {
  text-decoration: underline;
}

</style>

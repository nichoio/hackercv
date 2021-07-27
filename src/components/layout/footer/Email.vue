<template>
  <div class="d-flex justify-content-center">
    <span class="me-3">
      Email me:
    </span>
    <a href="#" class="cryptedmail"
       data-name="work"
       data-domain="nicho"
       data-tld="io"
       onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"></a>
  </div>
</template>

<style scoped>
  .cryptedmail:after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld); 
  }
</style>

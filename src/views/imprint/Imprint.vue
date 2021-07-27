<template>
  <h2 class="mb-4">
    Imprint/Impressum
  </h2>
  <p>
    Nicholas Kappel<br>
    Alte Dorfstraße 12b<br>
    16230 Melchow, Deutschland
  </p>

  <p>E-Mail: <a href="#" class="cryptedmail"
       data-name="work"
       data-domain="nicho"
       data-tld="io"
       onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"></a>
  </p>
</template>

<style scoped>
  .cryptedmail:after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
  }
</style>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container">
        <router-link :to="{ name: 'Home' }">
          <h1>Nicholas Kappel</h1>
        </router-link>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <div class="d-flex flex-grow-1 justify-content-end">
            <ul class="navbar-nav mb-lg-0">
              <li v-for="view in views" :key="view" class="nav-item">
                <router-link class="nav-link" :to="{ name: view }">
                  {{ view }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    views: function () {
      return ['Home', 'CV']
    }
  }
}
</script>

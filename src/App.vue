<template>
  <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center">

      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

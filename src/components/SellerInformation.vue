<template>
  <v-container>
    <v-row>
      <v-btn @click="postSellerApplicationData">Post Data</v-btn>
      <div>
        Seller Information
      </div>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {

    }
  },
  methods: {
    postSellerApplicationData () {
      const seller = {
        firstName: 'Amelie',
        lastName: 'Rinaldi'
      }

      axios.post('http://localhost:5000/sellers', seller)
    }
  }
}
</script>

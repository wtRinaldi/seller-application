<template>
  <v-container>
    <v-row>
      <div>Seller Questions</div>
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

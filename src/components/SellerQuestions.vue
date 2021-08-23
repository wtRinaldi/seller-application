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
      formInformation: {
        description: 'Your answers will help us provide you with a more personalized experience as a seller!',
        title: 'Tell us a little about yourself'
      }
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
  },
  created () {
    this.$emit('formInformation', this.formInformation)
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <div>
        Seller Information
      </div>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      formInformation: {
        description: 'To ensure the quality of our marketplace, we limit our seller community to the most qualified creators.  Let our curators know why you\'d be a great fit',
        title: 'Share your work with us'
      }
    }
  },
  created () {
    this.$emit('formInformation', this.formInformation)
  }
}
</script>

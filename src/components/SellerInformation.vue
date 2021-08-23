<template>
  <v-container>
    <v-form>
      <v-row>
        <v-text-field v-model="formInputs.firstName" :label="formLabels.firstName" class="mr-4" outlined/>
        <v-text-field v-model="formInputs.lastName" :label="formLabels.lastName" outlined/>
      </v-row>
      <v-row>
        <v-select v-model="formInputs.shopCategory" :label="formLabels.shopCategory" outlined></v-select>
      </v-row>
      <v-row>
        <v-text-field v-model="formInputs.portfolioLink" :label="formLabels.portfolioLink" outlined/>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-radio-group v-model="formInputs.hasOnlineStore" :label="formLabels.hasOnlineStore">
            <v-radio :value="true" label="Yes"/>
            <v-radio :value="false" label="No"/>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <v-checkbox v-model="formInputs.hasConfirmedAuthored" :label="formLabels.hasConfirmedAuthored"/>
        </v-col>
      </v-row>
      <v-row>
        <v-textarea v-if="formInputs.hasOnlineStore" v-model="formInputs.onlineStores" :label="formLabels.onlineStores" solo></v-textarea>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn color="primary">Next</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      formInformation: {
        description: 'To ensure the quality of our marketplace, we limit our seller community to the most qualified creators.  Let our curators know why you\'d be a great fit',
        title: 'Share your work with us'
      },
      formLabels: {
        firstName: 'First Name',
        lastName: 'Last Name',
        shopCategory: 'Your Shop Category',
        portfolioLink: 'Portfolio Link',
        hasOnlineStore: 'Do you already have an online store?',
        hasConfirmedAuthored: 'Yes, I confirm that the content I submit is authored by me.',
        onlineStores: 'Online stores I sell on today'
      },
      formInputs: {
        firstName: null,
        lastName: null,
        shopCategory: null,
        portfolioLink: null,
        hasConfirmedAuthored: null,
        hasOnlineStore: null,
        onlineStores: null
      }
    }
  },
  created () {
    this.$emit('formInformation', this.formInformation)
  }
}
</script>

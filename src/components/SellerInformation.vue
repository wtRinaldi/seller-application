<template>
  <v-container>
    <v-form ref="form">
      <v-row class="d-flex flex-column">
        <div class="">
          <label>{{ formLabels.firstName }}</label>
          <v-text-field
            v-model="formInputs.firstName"
            :rules="formRules.firstName"
            class="mr-4"
            full-width
            outlined/>
        </div>
        <div class="">
          <label>{{ formLabels.lastName }}</label>
          <v-text-field
            v-model="formInputs.lastName"
            :rules="formRules.lastName"
            full-width
            outlined/>
        </div>
      </v-row>
      <v-row class="d-flex flex-column">
        <label>{{ formLabels.shopCategory }}</label>
        <v-select
          v-model="formInputs.shopCategory"
          :rules="formRules.shopCategory"
          :items="shopCategories"
          placeholder="Select Category"
          outlined></v-select>
      </v-row>
      <v-row class="d-flex flex-column">
        <label>{{ formLabels.portfolioLink }}</label>
        <v-text-field
          v-model="formInputs.portfolioLink"
          :rules="formRules.portfolioLink"
          outlined/>
        <v-col cols="12">
          <v-checkbox
            v-model="formInputs.hasConfirmedAuthored"
            :label="formLabels.hasConfirmedAuthored"
            :rules="formRules.hasConfirmedAuthored"
            class="mt-0"/>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column">
        <v-col cols="12">
          <v-radio-group
            v-model="formInputs.hasOnlineStore"
            :label="formLabels.hasOnlineStore"
            :rules="formRules.hasOnlineStore">
            <v-radio :value="true" label="Yes"/>
            <v-radio :value="false" label="No"/>
          </v-radio-group>
        </v-col>

      </v-row>
      <v-row>
        <v-textarea
          v-if="formInputs.hasOnlineStore"
          v-model="formInputs.onlineStores"
          :label="formLabels.onlineStores"
          :rules="formRules.onlineStores"
          solo></v-textarea>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn @click="validate" color="primary">Next</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

import store from '@/store'
export default {
  data () {
    return {
      formInformation: {
        description: 'To ensure the quality of our marketplace, we limit our seller community to the most qualified creators.  Let our curators know why you\'d be a great fit.',
        title: 'Share your work with us'
      },
      shopCategories: ['Graphics', 'Fonts', 'Templates', 'Add-ons', 'Photos', 'Web Themes', '3D'],
      formInputs: {
        firstName: null,
        lastName: null,
        shopCategory: null,
        portfolioLink: null,
        hasConfirmedAuthored: null,
        hasOnlineStore: null,
        onlineStores: null
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
      formRules: {
        firstName: [(v) => !!v || 'First Name is required'],
        lastName: [(v) => !!v || 'Last Name is required'],
        shopCategory: [(v) => !!v || 'A Shop Category is required'],
        portfolioLink: [(v) => !!v || 'A Portfolio Link is required'],
        hasConfirmedAuthored: [(v) => !!v || 'Please confirm your work has been authored by you'],
        hasOnlineStore: [(v) => v !== null || 'Selection is required'],
        onlineStores: [(v) => !!v || 'Selection is required']
      }
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        store.commit('setFormData', this.formData)
        // this.$emit('isValid', this.formInputs)
        // this.$emit('nextStep')
      }
    }
  },
  created () {
    this.$emit('formInformation', this.formInformation)
  }
}
</script>
<style>
  label {
    font-weight: 600;
  }
</style>

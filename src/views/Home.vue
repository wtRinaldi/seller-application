<template>
  <div>
    <v-btn @click="formStep === 1 ? formStep = 2 : formStep = 1">Swap</v-btn>
    <v-card class="ma-auto" width="657">
      <form-stepper
        :step="formStep"
        :form-information="formInformation">
        <template v-slot:form>
          <keep-alive>
            <component
              :is="currentForm"
              @formInformation="formInformation = $event"
              @isValid="setData"
              @nextStep="formStep = 2"
            ></component>
          </keep-alive>
        </template>
      </form-stepper>
    </v-card>
  </div>
</template>

<script>
import FormStepper from '../components/FormStepper'
import SellerInformation from '../components/SellerInformation'
import SellerQuestions from '../components/SellerQuestions'

export default {
  name: 'Home',
  components: {
    FormStepper,
    SellerInformation,
    SellerQuestions
  },
  data () {
    return {
      formStep: 1,
      formInformation: null,
      formData: {}
    }
  },
  methods: {
    setData (dataObject) {
      for (const property in dataObject) {
        this.formData[property] = dataObject[property]
      }
    }
  },
  computed: {
    currentForm () {
      let currentForm
      switch (this.formStep) {
        case 1:
          currentForm = 'seller-information'
          break
        case 2:
          currentForm = 'seller-questions'
          break
      }
      return currentForm
    }
  }
}
</script>

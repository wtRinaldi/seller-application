<template>
  <form-stepper :step="1">
    <template v-slot:form>
      <component :is="currentForm"></component>
    </template>
  </form-stepper>
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
      formStep: 1
    }
  },
  methods: {

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

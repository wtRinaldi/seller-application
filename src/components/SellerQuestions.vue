<template>
  <v-container>
    <v-form ref="form">
      <v-row v-for="(question, property, index) in formLabels" :key="index">
        <v-col cols="12">
          <label :for="question">{{ question }}</label>
          <v-select
            v-model="formInputs[property]"
            :items="formOptions[property]"
            :rules="formRules[property]"
            :id="question" outlined/>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn type="submit" @click="validate" color="primary">Submit Application</v-btn>
      </v-row>
    </v-form>
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
      },
      formLabels: {
        bestDescribesQuality: 'When creating product to sell, which best describes your perspective on quality?',
        bestDescribesExperience: 'How would you describe your experience level as an online seller?',
        bestDescribesBusinessUnderstanding: 'How would you describe your understanding of business and marketing?'
      },
      formOptions: {
        bestDescribesQuality: [
          'I don\'t care what it takes, my products are the highest quality possible.',
          'I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere.',
          'I try to get quality products out quickly, even if I need to take a shortcut now and then.',
          'I spend the minimum amount of time & effort it takes to create products that are acceptable quality.',
          'Quantity is more important to me than quality.'
        ],
        bestDescribesExperience: [
          'I sell on multiple marketplaces and through my own website',
          'I have experience selling through only my own website',
          'I have experience selling through multiple marketplaces',
          'I have experience selling through one online marketplace',
          'I\'m new to selling creative products online'
        ],
        bestDescribesBusinessUnderstanding: [
          'I have an extensive background in business and/or marketing',
          'I\'m familiar with some skills & techniques, but I\'m not sure how to apply them when selling my creative work',
          'I\'m vaguely aware of basic business & marketing concepts',
          'I\'m not interested in understanding business & marketing'
        ]
      },
      formInputs: {
        bestDescribesQuality: null,
        bestDescribesExperience: null,
        bestDescribesBusinessUnderstanding: null
      },
      formRules: {
        bestDescribesQuality: [(v) => !!v || 'Selection is required'],
        bestDescribesExperience: [(v) => !!v || 'Selection is required'],
        bestDescribesBusinessUnderstanding: [(v) => !!v || 'Selection is required']
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
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.$emit('isValid', this.formInputs)
      }
    }
  },
  created () {
    this.$emit('formInformation', this.formInformation)
  }
}
</script>

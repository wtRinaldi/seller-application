<template>
  <v-container>
    <v-card>
      <v-row>
        <v-card-title>Seller Application</v-card-title>
        <v-spacer/>
        <v-card-title>{{ step }} of 2</v-card-title>
      </v-row>
      <v-row>
        <h2>{{ stepTitle }}</h2>
      </v-row>
      <v-row>
        <h5>{{ stepDescription }}</h5>
      </v-row>
      <v-row>
        <slot name="form"></slot>
      </v-row>
      <v-row>
        <slot name="footer"></slot>
      </v-row>
    </v-card>

  </v-container>
</template>

<script>

export default {
  props: {
    step: {
      type: Number,
      required: true,
      default: 0
    },
    stepTitle: {
      type: String,
      default: ''
    },
    stepDescription: {
      type: String,
      default: ''
    }

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

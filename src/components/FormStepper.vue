<template>
  <v-container>
    <v-card class="">
      <div class="ma-10">
        <v-row>
          <v-card-title>Seller Application</v-card-title>
          <v-spacer/>
          <v-card-title>{{ step }} of 2</v-card-title>
        </v-row>
        <v-row v-if="formInformation">
          <h2>{{ formInformation.title }}</h2>
        </v-row>
        <v-row v-if="formInformation">
          <h5>{{ formInformation.description }}</h5>
        </v-row>
        <v-row>
          <slot name="form"></slot>
        </v-row>
        <v-row>
          <slot name="footer"></slot>
        </v-row>
      </div>
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
    formInformation: {
      type: Object || null,
      default: null
    }
  },
  created () {

  }
}
</script>

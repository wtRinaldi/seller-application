<template>
  <v-container>
      <div class="ma-10">
        <v-row>
          <h3 class="top-text mb-2 text-uppercase">Seller Application</h3>
          <v-spacer/>
          <div class="top-text text-uppercase">{{ step }} of 2</div>
        </v-row>
        <v-row v-if="formInformation">
          <div class="title mb-4">{{ formInformation.title }}</div>
        </v-row>
        <v-row v-if="formInformation">
          <h5 class="font-weight-light mb-6">{{ formInformation.description }}</h5>
        </v-row>
        <v-row>
          <slot name="form"></slot>
        </v-row>
      </div>
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
<style>
  .top-text {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }

</style>

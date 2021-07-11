<template>
  <div id="timeline" class="container mb-5 mt-5">
    <h3 class="title text-center">
      Timeline
    </h3>

    <div v-for="(item, index) in timelineData" :key="index" class="timeline">
      <div class="timeline-content">
        <div class="year">
          {{ item.year }}
        </div>
        <div>{{ item.jobTitle }}</div>
        <div>{{ item.companyName }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      timelineData: [
        {
          jobTitle: 'Junior Software Developer',
          companyName: 'Chargeyourmind GmbH',
          description: '',
          year: 'since May 2021'
        },
        {
          jobTitle: 'Software Developer',
          companyName: 'Onveda',
          description: '',
          year: 'July 2019 - April 2021'
        },
        {
          jobTitle: 'Vocational training',
          companyName: 'Onveda',
          description: 'Specialized Computer Scientist',
          year: 'August 2016 - June 2019'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  color: #00ACD1;
  margin: 20px 0;
}

.container {
  position: relative;
}

.timeline {
  display: block;
  width: 50%;
  padding: 20px;

  @media (max-width: 600px) {
    * {
      text-align: right!important;
    }
    width: 80%;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:nth-of-type(odd) {
    border-right: 4px solid #00ACD1;

    .timeline-content {
      text-align: right;
    }
  }

  @media (min-width: 600px) {
    &:nth-of-type(even) {
      margin-left: calc(50% - 4px);
      border-left: 4px solid #00ACD1;
    }
  }

  @media (max-width: 600px) {
    &:nth-of-type(even) {
      margin-right: calc(50% - 4px);
      border-right: 4px solid #00ACD1;
    }
  }

  &::before {
    content: '';
    border: solid 6px #00ACD1;
    border-radius: 50%;
    font-size: 0px;
    position: absolute;
    left: 50%;
    transform: translate(-8px, 0);
  }

  @media (max-width: 600px) {
    &::before {
      position: absolute;
      left: calc(80% - 9px);
    }
  }
}
</style>

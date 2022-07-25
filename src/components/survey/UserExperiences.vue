<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiances">Load Submitted Experiences</base-button>
      </div>
      <ul v-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isLoading && error">{{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No Stored Experiences. Please add some.
      </p>
      <p v-else>Loading...</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: false
    }
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiances() {
      this.isLoading = true;
      this.error = false;
      fetch('https://vue-http-requests-a120f-default-rtdb.firebaseio.com/surveys.json')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        const results = [];
        for(const id in data) {
          results.push({id: id, name: data[id].name, rating: data[id].rating});
        }
        this.results = results;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.error = "failed to fetch data";
      });
    }
  },
  mounted() {
    console.log('mounted')
    this.loadExperiances();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
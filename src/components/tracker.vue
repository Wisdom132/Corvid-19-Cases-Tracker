<template>
  <div>
    <nav class="uk-background-secondary uk-light" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">Corvid-19 Cases Tracker</a>
      </div>
    </nav>
    <section>
      <div class="uk-container uk-margin-top">
        <div>
          <div class="uk-background-secondary uk-margin-bottom uk-padding uk-panel">
            <div class="uk-margin">
              <input v-model="search" class="uk-input" type="text" placeholder="Filter By Country" />
            </div>
          </div>
        </div>

        <div class="uk-child-width-1-4@s uk-grid-match" uk-grid>
          <div v-for="(data,key) in filteredCountries" :key="key">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <div class="uk-card-badge uk-label">{{data.parentId}}</div>
              <h3 class="uk-card-title uk-margin-top">{{data.displayName}}</h3>
              <ul class="uk-list uk-list-divider">
                <li>Total Confirmed:{{data.totalConfirmed || 0}}</li>
                <li>Total Deaths:{{data.totalDeaths || 0}}</li>
                <li>Total Recovered:{{data.totalRecovered ||0}}</li>
                <li>Last Updated:{{moment(data.lastUpdated).format('MMMM Do YYYY, h:mm:ss a')}}</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    async getResultFromVuex() {
      await this.$store.dispatch("getAllCases");
    }
  },
  created() {
    this.getResultFromVuex();
  },
  computed: {
    ...mapState(["cases"]),
    filteredCountries() {
      return this.cases.filter(country => {
        return country.displayName
          .toLowerCase()
          .match(this.search.toLowerCase());
      });
    }
  }
};
</script>
<style scoped></style>

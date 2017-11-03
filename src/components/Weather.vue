<template>
  <div class="weather">

  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
  },
  methods: {
    fetchWeather: () => {
      fetch('/dash/weather', {
        method: 'GET',
      })
      .then(response => console.log(response));
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style scoped>
</style>

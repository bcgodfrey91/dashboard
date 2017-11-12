<template>
  <div class="weather">

  </div>
</template>

<script>
export default {
  name: 'Weather',
  methods: {
    fetchWeather: () => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      fetch('/dash/weather', {
        method: 'GET',
        headers,
      })
      .then(response => response.json())
      .then(data => JSON.parse(data.body))
      .then(body => console.log(body.hourly));
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style scoped>
</style>

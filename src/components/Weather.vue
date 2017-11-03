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
      fetch('https://api.darksky.net/forecast/6536bb03dde9895eabd3587d186e56ed/42.3601,-71.0589', {
        method: 'GET',
        mode: 'no-cors',
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

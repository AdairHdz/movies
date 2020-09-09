<template>
  <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5">
    <movie-card
      :class="{'col': true, 'mb-5': true}"
      v-for="(movie, index) in movies"
      :key="'key' + index"
      :title="movie.title"
      :wallpaper="movie.wallpaper"
      :id="movie.id"
    ></movie-card>
  </div>
</template>

<script>
import MovieCard from "./../components/movies/MovieCard";
export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieCard: MovieCard,
  },
  created() {
    fetch("https://movies-fd7b9.firebaseio.com/movies.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((movie) => {
          if (movie != null) {
            this.movies.push(movie);
          }
        });
      })
      .catch((errors) => {
        alert(errors);
      });
  },
};
</script>
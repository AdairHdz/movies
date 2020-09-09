<template>
    <div class="row">
        <div class="col-4">
            <movie-card-image-overlay></movie-card-image-overlay>
        </div>
        <div class="col-8">
            <movie-description></movie-description>
        </div>
    </div>
</template>

<script>
import MovieCardImageOverlay from "./../components/movies/MovieCardImageOverlay"
import MovieDescription from "./../components/movies/MovieDescription"
export default {
    components: {
        MovieCardImageOverlay: MovieCardImageOverlay,
        MovieDescription: MovieDescription
    }
}
</script>
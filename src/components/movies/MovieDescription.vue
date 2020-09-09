<template>
  <div class="card">
    <div class="card-header">Movie Description</div>
    <div class="card-body">
      <p class="h5 card-title">{{movie.title}}</p>
      <p
        class="card-text"
      >{{ movie.description }}</p>
      <p class="h6">Duration</p>
      <p>{{ movie.duration }}</p>
      <p class="h6">Cast</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            movie: {
                title: "www"
            }
        }
    },
    created(){
        fetch("https://movies-fd7b9.firebaseio.com/movies.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(fetchedMovie => {
                if(fetchedMovie !== null){
                    console.log(fetchedMovie.id)
                    if(fetchedMovie.id === this.$route.params.id){
                        this.movie.title = this.fetchedMovie.title
                        console.log(this.movie)
                    }
                }
            })
        })
        
        .catch(errors => alert(errors))
    }
};
</script>
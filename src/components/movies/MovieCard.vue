<template>
  <div class="card">
    <img
      :src="wallpaper"
      class="card-img-top w-100"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>

      <router-link :to="{path: `movies/${id}/info`}" class="btn btn-primary btn-block">More info</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    wallpaper: String    
  }
};
</script>


<template>
  <div class="Icon" :data-clipboard-text="this.name" :title="this.name">
      <img :src="this.image" :alt="this.name" class="Icon__image">
  </div>
</template>

<script>
  export default {
    props: ['name', 'image'],
  }
</script>

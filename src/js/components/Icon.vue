<template>
  <div :class="['icon', {'is-small': this.type === 'idea'}]" :data-clipboard-text="this.name" :title="this.name">
      <img :src="'https://raw.githubusercontent.com/kr4/icons/master/images/' + this.type + 's/' + this.image" :alt="this.name">
  </div>
</template>

<script>
  export default {
    props: ['name', 'image', 'type', 'base']
  }
</script>

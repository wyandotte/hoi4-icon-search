<template>
  <div class="Icons">
    <icon :name="goal.name" :image="goal.image" v-for="goal in goals"></icon>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';

  import Icon from './Icon';

  import goals from '../data/goals';

  export default {
    components: { Icon },

    mounted() {
      let clipboard = new Clipboard('.Icon');

      clipboard.on('success', function(e) {
        toastr.success('Name copied to clipboard.', null, { timeOut: 800 })
      });
    },

    data() {
      return {
        goals
      }
    },
  }
</script>

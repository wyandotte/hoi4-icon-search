<template>
  <div class="Icons">
    <input type="text" v-model="searchQuery" placeholder="E.g. crown, navy, resource" class="Icons__search">
    <icon :name="goal.name" :image="goal.image" v-for="goal in filteredGoals"></icon>
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
        searchQuery: '',

        goals
      }
    },

    computed: {
      filteredGoals: function() {
        let self = this;
        return self.goals.filter(function (goal) {
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return searchRegex.test(goal.tags)
        })
      }
    }
  }
</script>

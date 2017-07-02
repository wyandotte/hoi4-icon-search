<template>
  <div>
    <div class="Search">
        <input type="text" v-model="searchQuery" placeholder="E.g. crown, navy, resource" class="Search__search-bar">

        <div class="Search__filters">
          Show icons for:
          <a href="#" @click="toggleGoalsDisplay" class="Search__filter national-focus Search__filter--selected">National focus</a>
          <a href="#" @click="toggleIdeasDisplay" class="Search__filter ideas Search__filter--selected">Ideas</a>
        </div>
    </div>
    <div class="Icons Icons--goals">
      <span class="Icons__header">National focus ({{ filteredGoals.length }})</span>
      <icon :name="goal.name" :image="goal.image" v-for="goal in filteredGoals"></icon>
    </div>
    <div class="Icons Icons--ideas">
      <span class="Icons__header">Ideas ({{ filteredIdeas.length }})</span>
      <icon :name="idea.name" :image="idea.image" :small="true" v-for="idea in filteredIdeas"></icon>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';

  import Icon from './Icon';

  import goals from '../data/goals';
  import ideas from '../data/ideas';

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

        goals,

        ideas
      }
    },

    computed: {
      filteredGoals: function() {
        return this.filtered(this.goals);
      },

      filteredIdeas: function() {
        return this.filtered(this.ideas);
      }
    },

    methods: {
      filtered(items) {
        let self = this;

        return items.filter(function (item) {
          let searchRegex = new RegExp(self.searchQuery, 'i')
          return searchRegex.test(item.tags)
        })
      },

      toggleGoalsDisplay(e) {
        e.preventDefault();

        document.querySelector('.Search__filter.national-focus').classList.toggle('Search__filter--selected');
        document.querySelector('.Icons--goals').classList.toggle('Icons--hide');
      },

      toggleIdeasDisplay(e) {
        e.preventDefault();

        document.querySelector('.Search__filter.ideas').classList.toggle('Search__filter--selected');
        document.querySelector('.Icons--ideas').classList.toggle('Icons--hide');
      }
    }
  }
</script>

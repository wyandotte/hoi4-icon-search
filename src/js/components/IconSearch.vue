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
      <icon :name="goal.name" :image="goal.image" type="goal" v-for="goal in filteredGoals" :key="goal.name"></icon>
    </div>
    <div class="Icons Icons--ideas">
      <span class="Icons__header">Ideas ({{ filteredIdeas.length }})</span>
      <icon :name="idea.name" :image="idea.image" type="idea" v-for="idea in filteredIdeas" :key="idea.name"></icon>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Clipboard from 'clipboard';
  import yaml from 'js-yaml';

  import Icon from './Icon';

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

        baseUrl: 'https://raw.githubusercontent.com/kr4/icons/master',

        goals: [],

        ideas: []
      }
    },

    mounted() {
      axios.get(this.baseUrl + '/data/goals.yaml').then(({ data }) => {
        this.goals = yaml.safeLoad(data).goals;
      });

      axios.get(this.baseUrl + '/data/ideas.yaml').then(({ data }) => {
        this.ideas = yaml.safeLoad(data).ideas;
      });
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

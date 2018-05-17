<template>
  <div>
    <div class="mb-6">
        <input type="text" v-model="searchQuery" placeholder="E.g. crown, navy, resource" class="w-full bg-grey-lighter text-grey-darker rounded p-4 mb-6">

        <div class="border-2 border-indigo rounded inline-block">
          <a href="#" @click.prevent="toggleGoalsDisplay" id="goals-toggle" class="inline-block no-underline text-indigo-darker border-r border-indigo p-4 text-center bg-indigo-lightest">National Focus</a><a href="#" @click.prevent="toggleIdeasDisplay" id="ideas-toggle" class="inline-block no-underline text-indigo-darker py-4 px-8 text-center bg-indigo-lightest">Ideas</a>
        </div>
    </div>
    <div class="mb-4" id="goals">
      <span class="uppercase tracking-wide text-grey-dark">National focus ({{ filteredGoals.length }})</span>
      <div class="flex flex-wrap justify-left mt-3">
        <icon :name="goal.name" :image="goal.image" type="goal" v-for="goal in filteredGoals" :key="goal.name"></icon>
      </div>
    </div>
    <div class="mb-4" id="ideas">
      <span class="uppercase tracking-wide text-grey-dark">Ideas ({{ filteredIdeas.length }})</span>
      <div class="flex flex-wrap justify-left mt-3">
        <icon :name="idea.name" :image="idea.image" type="idea" v-for="idea in filteredIdeas" :key="idea.name"></icon>
      </div>
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

      let clipboard = new Clipboard('.icon');

      window.clipboard = Clipboard;

      clipboard.on('success', function(e) {
        toastr.success('Name copied to clipboard.', null, { timeOut: 800 })
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

      toggleGoalsDisplay() {
        document.querySelector('#goals-toggle').classList.toggle('bg-indigo-lightest');
        document.querySelector('#goals').classList.toggle('hidden');
      },

      toggleIdeasDisplay() {
        document.querySelector('#ideas-toggle').classList.toggle('bg-indigo-lightest');
        document.querySelector('#ideas').classList.toggle('hidden');
      }
    }
  }
</script>

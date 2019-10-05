<template>
  <div id="app" class="antialiased font-sans flex flex-col p-8">
    <Card v-for="item in items" :key="item.id" v-bind="item" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import Cat from '@/assets/cat.jpeg';

export default {
  components: {
    Card,
  },
  data: () => ({
    items: [
      {
        id: 1,
        title: 'Who are you?',
        description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! <span>Maiores et perferendis</span> eaque, exercitationem praesentium nihil.
        `,
        img: Cat,
        tags: [
          {
            id: 1,
            name: 'photography',
          },
          {
            id: 2,
            name: 'animals',
          },
          {
            id: 3,
            name: 'cats',
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

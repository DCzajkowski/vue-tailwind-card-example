<template>
  <div id="app" class="antialiased font-sans flex flex-col p-8">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

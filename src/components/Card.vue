<template>
  <div class="rounded overflow-hidden shadow-lg sm:flex sm:h-64 max-w-2xl">
    <img class="w-full h-64 sm:h-full sm:w-auto object-cover" :src="img" alt="A cat with a buttefly on its nose" />
    <div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" v-text="title"></div>
        <p class="text-gray-700 text-base" v-html="description"></p>
      </div>
      <div class="px-6 pb-4 pt-0 sm:pt-4">
        <Tag v-for="tag in tags" :key="tag.id" v-bind="tag" />
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from '@/types';
import Tag from '@/components/Tag';

export default {
  components: {
    Tag,
  },
  props: Card,
};
</script>

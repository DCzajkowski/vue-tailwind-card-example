<template>
  <div
    class="rounded overflow-hidden shadow-lg sm:flex sm:h-64 max-w-2xl"
    :class="{
      'bg-gray-900 text-white': dark,
    }"
  >
    <img class="w-full h-64 sm:h-full sm:w-auto object-cover" :src="item.img" alt="A cat with a buttefly on its nose" />
    <div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" v-text="item.title"></div>
        <p
          class="text-base"
          :class="{
            'text-gray-700': !dark,
            'text-gray-100': dark,
          }"
          v-html="item.description"
        ></p>
      </div>
      <div class="px-6 pb-4 pt-0 sm:pt-4">
        <Tag v-for="tag in item.tags" :key="tag.id" :tag="tag" :dark="dark" />
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { Card } from '@/types';
import Tag from '@/components/Tag';

export default {
  components: {
    Tag,
  },
  props: {
    item: Card,
    dark: VueTypes.bool.def(false),
  },
};
</script>

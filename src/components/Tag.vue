<template>
  <a
    :href="url"
    class="inline-block px-4 py-1 bg-gray-300 rounded-full text-sm font-semibold text-gray-700 focus:outline-none focus:shadow-outline hover:bg-gray-500 hover:text-gray-900 mr-2 mt-2 sm:mt-0"
    >#{{ name }}</a
  >
</template>

<script>
import { Tag } from '@/types';

export default {
  props: Tag,
  computed: {
    url() {
      return `http://localhost/${this.name}`;
    },
  },
};
</script>

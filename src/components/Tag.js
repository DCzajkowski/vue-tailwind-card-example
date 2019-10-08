import { Tag, types } from '@/types';

/* @vue/component */
export default {
  props: {
    tag: Tag,
    dark: types.bool.def(false),
  },
  computed: {
    url() {
      return `http://localhost/tags/${this.tag.name}`;
    },
  },
  render() {
    return (
      <a
        href={this.url}
        class={{
          'bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-gray-900': !this.dark,
          'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-gray-900': this.dark,
          'inline-block px-4 py-1 rounded-full text-sm font-semibold focus:outline-none focus:shadow-outline mr-2 mt-2 sm:mt-0': true,
        }}
      >
        #{this.tag.name}
      </a>
    );
  },
};

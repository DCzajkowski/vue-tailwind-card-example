import VueTypes from 'vue-types';
import { Card } from '@/types';
import Tag from '@/components/Tag';

/* @vue/component */
export default {
  props: {
    item: Card,
    dark: VueTypes.bool.def(false),
  },
  render() {
    return (
      <div
        class={{
          'bg-gray-900 text-white': this.dark,
          'rounded overflow-hidden shadow-lg sm:flex sm:h-64 max-w-2xl': true,
        }}
      >
        <img
          class="w-full h-64 sm:h-full sm:w-auto object-cover"
          src={this.item.img}
          alt="A cat with a buttefly on its nose"
        />
        <div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{this.item.title}</div>
            <p
              class={{
                'text-gray-700': !this.dark,
                'text-gray-100': this.dark,
                'text-base': true,
              }}
              domPropsInnerHTML={this.item.description}
            ></p>
          </div>
          <div class="px-6 pb-4 pt-0 sm:pt-4">
            {this.item.tags.map(tag => (
              <Tag key={tag.id} tag={tag} dark={this.dark} />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

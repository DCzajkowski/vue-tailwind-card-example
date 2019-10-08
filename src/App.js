import Card from '@/components/Card';
import Cat from '@/assets/cat.jpeg';

import '@/assets/app.css';

/* @vue/component */
export default {
  data: () => ({
    isDark: true,
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
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
  render() {
    return (
      <div id="app" class="antialiased font-sans flex flex-col p-8" vOn:click={this.toggleTheme}>
        {this.items.map(item => (
          <Card key={item.id} item={item} dark={this.isDark} />
        ))}
      </div>
    );
  },
};

import VueTypes from 'vue-types';

const id = VueTypes.integer.isRequired;

export const Tag = {
  id,
  name: VueTypes.string.isRequired,
};

export const Card = {
  id,
  img: VueTypes.string.isRequired,
  title: VueTypes.string.isRequired,
  description: VueTypes.string.isRequired,
  tags: VueTypes.arrayOf(VueTypes.shape(Tag)),
};

export const types = VueTypes;

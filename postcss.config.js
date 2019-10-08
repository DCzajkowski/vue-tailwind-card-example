const productionConfig = [
  require('autoprefixer'),
  require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.js'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  }),
  require('cssnano'),
];

module.exports = {
  plugins: [require('tailwindcss'), ...(process.env.NODE_ENV === 'production' ? productionConfig : [])],
};

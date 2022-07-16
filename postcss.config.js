const isDev = process.env.NODE_ENV !== 'production';

const plugins = [];

if (isDev) {
  plugins.push('postcss-preset-env');
}

module.exports = {
  plugins,
};

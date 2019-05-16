import jspm from 'rollup-plugin-jspm';
import babel from 'rollup-plugin-babel';

export default {
  // Leading "./" still important here
  input: ['./main.js'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [jspm({
    env: {
      node: true,
      production: false
    }
  }), babel({
    runtimeHelpers: true,
    exclude: ['node_modules/@babel/**', 'jspm_packages/**']
  })]
};
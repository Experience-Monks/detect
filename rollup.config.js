import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

function configure(file) {
  return {
    ...file
  };
}

export default {
  input: './src/index.js',
  output: [
    { file: 'dist/index.js', format: 'cjs', name: 'Detect' },
    { file: 'dist/index.module.js', format: 'es' }
  ].map(configure),
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};

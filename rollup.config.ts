import typescript from '@rollup/plugin-typescript';

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    external: ['bowser'],
    output: {
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      entryFileNames: 'index.js',
    },
    plugins: [
      typescript({
        rootDir: 'src/',
        declaration: true,
        declarationDir: 'dist/',
      }),
    ],
  },

  // ES
  {
    input: 'src/index.ts',
    external: ['bowser'],
    output: {
      file: 'dist/index.module.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [typescript()],
  },
];

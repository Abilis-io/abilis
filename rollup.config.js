import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const prod = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/abilis.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/abilis.cjs.min.js',
      format: 'cjs',
      plugins: [
        prod && terser(),
      ],
    },
    {
      file: 'dist/abilis.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/abilis.esm.min.js',
      format: 'esm',
      plugins: [
        prod && terser(),
      ],
    },
    {
      name: 'Abilis',
      file: 'dist/abilis.umd.js',
      format: 'umd',
    },
    {
      name: 'Abilis',
      file: 'dist/abilis.umd.min.js',
      format: 'umd',
      plugins: [
        prod && terser(),
      ],
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const prod = !process.env.ROLLUP_WATCH;

const dist = 'dist/js';
const bundle = 'abilis';

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/${bundle}.cjs.min.js`,
      format: 'cjs',
      plugins: [
        prod && terser(),
      ],
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm',
    },
    {
      file: `${dist}/${bundle}.esm.min.js`,
      format: 'esm',
      plugins: [
        prod && terser(),
      ],
    },
    {
      name: 'Abilis',
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
    },
    {
      name: 'Abilis',
      file: `${dist}/${bundle}.umd.min.js`,
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

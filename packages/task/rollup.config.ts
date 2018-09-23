import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { camelCase } from 'lodash';
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json');

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, format: 'umd', sourcemap: true, name: camelCase(pkg.name) },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    sourceMaps(),
  ],
}

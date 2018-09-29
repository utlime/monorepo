import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { camelCase } from 'lodash';
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json');

const globals = Object.keys(pkg.peerDependencies).reduce((acc, cur) => ({
  ...acc,
  [cur]: camelCase(cur)
}), {});

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, format: 'umd', sourcemap: true, name: camelCase(pkg.name), globals },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  watch: {
    include: 'src/**',
  },
  external: [
    ...Object.keys(globals)
  ],
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

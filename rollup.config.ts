import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import clear from 'rollup-plugin-clear'
import { camelCase, upperFirst } from 'lodash';
// @ts-ignore
import path from 'path';

const ROOT = process.cwd();
const pkg = require(path.join(ROOT, 'package.json'));

const nameBuilder = name => upperFirst(camelCase(name));
const globals = Object.keys(pkg.peerDependencies || {}).reduce((acc, cur) => ({ ...acc, [cur]: nameBuilder(cur) }), {});

export default [
  {
    output: [
      { file: pkg.main, format: 'umd', sourcemap: true, name: nameBuilder(pkg.name), globals },
      { file: pkg.module, format: 'es', sourcemap: true, name: nameBuilder(pkg.name), globals },
    ],
    plugins: [
      sourceMaps(),
    ],
  },
  {
    output: [
      { file: pkg.unpkg, format: 'iife', sourcemap: true, name: nameBuilder(pkg.name), globals },
    ],
    plugins: [
      uglify(),
    ],
  },
].map(({ output, plugins }) => {
  return {
    input: path.join(ROOT, 'src/index.ts'),
    external: Object.keys(globals),
    output: output.map((out) => ({
      ...out,
      file: path.join(ROOT, out.file)
    })),
    plugins: [
      clear({ targets: [path.join(ROOT, 'dist')] }),
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      ...plugins
    ]
  }
});

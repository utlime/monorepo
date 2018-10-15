import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { camelCase, upperFirst } from 'lodash';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
// @ts-ignore
import path from 'path';

const ROOT = process.cwd();
const pkg = require(path.join(ROOT, 'package.json'));

const nameBuilder = name => upperFirst(camelCase(name));
const globals = Object.keys(pkg.peerDependencies || {}).reduce((acc, cur) => ({ ...acc, [cur]: nameBuilder(cur) }), {});

export default [
  {
    input: path.join(ROOT, 'src/index.ts'),
    output: [
      { file: path.join(ROOT, pkg.main), format: 'umd', sourcemap: true, name: nameBuilder(pkg.name), globals },
      { file: path.join(ROOT, pkg.module), format: 'es', sourcemap: true },
    ],
    external: [...Object.keys(globals)],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      sourceMaps(),
    ],
  },
  {
    input: path.join(ROOT, 'src/index.ts'),
    output: [
      { file: path.join(ROOT, pkg.unpkg), format: 'iife', sourcemap: true, name: nameBuilder(pkg.name), globals },
    ],
    external: [...Object.keys(globals)],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      uglify(),
    ],
  },
];

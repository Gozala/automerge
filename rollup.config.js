import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/automerge.js',
  output: {
    sourcemap: true,
    file: 'dist/automerge.js',
    format: 'es'
  },
  plugins: [nodeResolve({ browser: true }), commonjs()]
};

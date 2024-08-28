import {type Compiler} from '@rspack/core'

export default class WatchRunPlugin {

  async apply(compiler: Compiler) {
    compiler.hooks.watchRun.tapAsync(
      'watch-run-plugin',
      (compiler, done) => {
        const files = compiler.modifiedFiles || new Set()
        console.log(files)
        done()
      }
    )
  }
}

import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'public/*',
      'rollup.config.js',
      'src/scrobble-api.js',
      'web-dev-server.config.js',
      'web-test-runner.config.js'
    ]
  },
  pluginJs.configs.recommended
]

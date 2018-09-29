/* eslint-disable import/no-extraneous-dependencies */

import merge from 'webpack-merge'
import common from './webpack.common.babel'

const configs = common.map(config =>
  merge(config, {
    mode: 'development',
    devtool: 'source-map'
  })
)

export default configs

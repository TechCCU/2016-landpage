process.env.DISABLE_NOTIFIER = true

const elixir = require('laravel-elixir')

elixir.config.publicPath = 'assets'
elixir.config.assetsPath = 'resources'

elixir(function(mix) {
  mix.sass('app.scss')
})

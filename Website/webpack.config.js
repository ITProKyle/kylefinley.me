const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
const PUBLIC = process.env.PUBLIC_DEV || HOST + ':' + PORT;
const METADATA = {
  host: HOST,
  port: PORT,
  public: PUBLIC,
};

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    public: METADATA.public,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      ignored: /node_modules/
    }
  }
};

module.exports = {
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/sketch.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: "main.js",
  },

  devServer: {
    static: "dist",
    open: true,
  },
};

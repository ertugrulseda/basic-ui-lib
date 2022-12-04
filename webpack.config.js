const path = require('path'); // node yüklüyse bu vardır

module.exports = {
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'build'), // build isminde bir klasör oluşturup bundle alıyor
		globalObject: 'this',
		library: {
			name: 'basic-ui-lib',
			type: 'umd'
		}
	},
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ]
					}
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass')
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'@emotion/react': '@emotion/react',
		'@emotion/styled': '@emotion/styled',
		'@mui/material': '@mui/material'
	}
};

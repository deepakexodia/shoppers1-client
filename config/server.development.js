// config used by server side only
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'shop';
const dbUser = process.env.DB_USER || '';
const dbPass = process.env.DB_PASS || '';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	// process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;
	'mongodb+srv://write:write@cluster0-elbdk.mongodb.net/shop';

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `https://shoppers1.herokuapp.com/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `https://shoppers1.herokuapp.com/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `https://shoppers1-client.herokuapp.com`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: process.env.PORT || 3001,
	storeListenPort: process.env.PORT || 3000,

	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: '-',

	// key to sign store cookies
	cookieSecretKey: '-',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000

	// developerMode: true
};

const apiUrls = {
	dev: 'http://localhost:5002',
	prod: process.env.REACT_APP_API,
}

export const config = {
	APP_NAME: 'Nextjs',
	API_URL: apiUrls[process.env.REACT_APP_HOST_ENV || 'dev'],
	NAMESPACE: process.env.REACT_APP_CUSTOMER,
	OPERATOR_KEY: 'operator',
	TOKEN_KEY: 'tk',
	SA_TOKEN_KEY: 'satk',
}

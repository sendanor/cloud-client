import Q from 'q';

/** GET request */
function getRequest (url) {
	return Q.reject(new Error("Warning! Angular environment detected. You must use it like `cloudClient(this._url, require('@sendanor/cloud-client/angular/index')($http) )`."));
}

/** POST request */
function postRequest (url, data) {
	return Q.reject(new Error("Warning! Angular environment detected. You must use it like `cloudClient(this._url, require('@sendanor/cloud-client/angular/index')($http) )`."));
}

// Exports
const request = {
	get: getRequest,
	post: postRequest
};

export default request;
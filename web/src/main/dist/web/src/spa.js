'use strict';

import Router from 'metal-router';

new Router({
	container: '#content',
	component: 'LoginForm',
	path: /\/home/,
	reuseActiveComponent: false
}, false);

new Router({
	container: '#content',
	component: 'LoginForm',
	path: /\//,
	reuseActiveComponent: false
}, false);

new Router({
	container: '#content',
	component: 'OrganizationForm',
	path: /\/organization/,
	reuseActiveComponent: false
}, false);

Router.router().dispatch();
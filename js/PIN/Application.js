PIN.Application = {

	appdata: {
		projects: [],
		resultList: {}
	},

	options: {
		serverGeolocation: {},
		projectId: null,
		DGApiKey: 'rulhck5627'
	},

	/**
	 * Initialize application
	 * @param {Object} options Application options:
	 * 	- country
	 * 	- city
	 */
	initialize: function(options) {
		PIN.System.UI.initialize();

		this.options.serverGeolocation = options.geolocation;
		this.getProjectList();
	},

	/**
	 * 
	 */
	setLocation: function() {
		// Saved in cookies
		if (PIN.System.Utils.getCookie('projectId')) {
			this.options.projectId = PIN.System.Utils.getCookie('projectId')

			return;
		}

		var geolocationData = this.options.serverGeolocation,
			country = geolocationData.country || 'RU',
			projectId;

		if (geolocationData.city) {
			projectId = this.getProjectIdByName(geolocationData.city);
		} else {
			projectId = this._isCountrySupported(geolocationData.country) 
				? this.getProjectIdByName(PIN.Application[geolocationData.country + '_DEF_PROJECT_NAME']) // Def city for country
				: this.getProjectIdByName(PIN.Application.RU_DEF_PROJECT_NAME);
		}

		this.options.projectId = projectId;

		this.saveLocation();
	},

	saveLocation: function() {
		PIN.System.Utils.setCookie('projectId', this.options.projectId);
	},

	parseWKTPoint: function(WKTString) {
		var regexpString = '.*?([+-]?\\d*\\.\\d+)(?![-+0-9\\.])(\\s+)([+-]?\\d*\\.\\d+)(?![-+0-9\\.])',
			regexpObject = {},
			regexpResult = [],
			parseResult = [];

		regexpObject = new RegExp(regexpString, ['i']);
		regexpResult = regexpObject.exec(WKTString);
		parseResult.push(regexpResult[3], regexpResult[1]);

		return parseResult;
	},

	getProjectCenter: function(projectId) {
		var projectData = {},
			projectCenter = [];

		projectData = this.getProjectDataById(projectId);
		projectCenter = this.parseWKTPoint(projectData.centroid);

		return projectCenter;
	},

	getProjectIdByName: function(projectName) {
		var projects = this.appdata.projects,
			i;

		for (i = 0; i < projects.length; i++) {
			if (projects[i].name && projects[i].name == projectName && projects[i].id) {
				return projects[i].id;
			}
		}

		return false;
	},

	getProjectDataById: function(projectId) {
		var projects = this.appdata.projects,
			i;

		for (i = 0; i < projects.length; i++) {
			if (projects[i].id && projects[i].id == projectId) {
				return projects[i];
			}
		}

		return false;
	},

	getProjectList: function() {
		PIN.System.DGAPI.request('http://catalog.api.2gis.ru/project/list', {}, this.saveProjectList, this.saveProjectList);
	},

	saveProjectList: function(projectsResult) {
		if (projectsResult.response_code === '200') {
			PIN.Application.appdata.projects = projectsResult.result;
		}

		PIN.System.UI.renderProjectList();
		PIN.Application.setLocation();
		PIN.Application.setProject();
	},

	setProject: function(projectId) {
		var projectId = projectId ? projectId : PIN.Application.options.projectId,
			projectData = this.getProjectDataById(projectId),
			projectCoordinates = this.getProjectCenter(projectId);

		PIN.Plugins.Map.showProject(projectCoordinates);
		PIN.System.UI.setCityselectLinkLabel(projectData.name);
		this.options.projectId = projectId;
		this.saveLocation();
	},

	showResult: function(result) {
		// @todo show result
		PIN.System.UI.resetSearchInput();
	},

	saveResultList: function(resultList) {
		this.clearResultList();
		this.appdata.resultList = resultList;
		console.log('saveResultList:', resultList);
		if (resultList.length > 1) {
			console.log('render');
			PIN.System.UI.renderResultList();
			PIN.System.UI.toggleCityselect('hide');
			PIN.System.UI.togglePlaces('show');
			PIN.System.UI.toggleSelectPanel(null, 'show');
		}
	},

	clearResultList: function() {
		this.appdata.resultList = {};
		console.log('clearResultList:', this.appdata.resultList);
	},

	getResultById: function(id) {
		console.log(id, PIN.Application.appdata.resultList);

		for (var result in PIN.Application.appdata.resultList) {
			if (PIN.Application.appdata.resultList[result]['id'] == id) {
				return PIN.Application.appdata.resultList[result];
			}
		}

		return false;
	},

	_isCountrySupported: function(countryCode) {
		return !!PIN.Application.SUPPORTED_COUNTRIES[countryCode];
	}

};

/**
 * Constant
 * Default project name for Russia
 * @type {String}
 */
PIN.Application.RU_DEF_PROJECT_NAME = 'Москва';

/**
 * Constant
 * Default project name for Ukraine
 * @type {String}
 */
PIN.Application.UA_DEF_PROJECT_NAME = 'Одесса';

/**
 * Constant
 * Default project name for Kazakhstan
 * @type {String}
 */
PIN.Application.KZ_DEF_PROJECT_NAME = 'Алматы';

/**
 * Constant
 * Supported countries
 * @type {Array}
 */
PIN.Application.SUPPORTED_COUNTRIES = ['RU', 'UA', 'KZ'];
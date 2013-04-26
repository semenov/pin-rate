PIN.Plugins.Search = {

	houseSearch: function(e) {
		var searchString = PIN.System.UI.components.address_address.val();

		// @todo add def number for house

		console.log('You searching for (geo): ' + searchString);

		// clear result list
		PIN.Application.clearResultList();
		PIN.System.UI.clearResultList();

		PIN.System.DGAPI.request(
			'http://catalog.api.2gis.ru/geo/search',
			{
				'q' 		: searchString,
				'project' 	: PIN.Application.options.projectId,
				'types' 	: 'house',
				'format' 	: 'short',
				'limit' 	: 50
			},
			PIN.Plugins.Search.obtainHouseSearchResult,
			PIN.Plugins.Search.obtainHouseSearchError
		);

		if (e) {
			e.preventDefault();
		}
	},

	obtainHouseSearchResult: function(result) {
		if (result && result.response_code === "200" && parseInt(result.total) === 1) {
			// One result
			PIN.Application.saveResultList(result.result);
			//PIN.Application.showResult(result.result[0].id);
			PIN.Plugins.Search.placeRequest(result.result[0]);

		} else if (result && result.response_code === "200" && parseInt(result.total) > 1) {
			// List of results
			PIN.Application.saveResultList(result.result);

		} else if (result && result.response_code === "404") {
			// Nothing is found
			PIN.System.UI.showFail('Nothing is found');
			PIN.System.UI.resetSearchInput();
		}
	},

	obtainHouseSearchError: function(err) {
		PIN.System.UI.showFail('obtainHouseSearchError');
	},

	placeRequest: function(place) {
		console.log(place);
	}

};

// @todo move
PIN.Plugins.Search.PLACE_RATE_CATEGORIES = {
	
};
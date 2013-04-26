PIN.System.DGAPI = {

	request: function(addressString, data, doneCallback, failCallback, context) {
		var request,
			requestData = {
				'key': PIN.Application.options.DGApiKey,
				'output': 'jsonp',
				'version': '1.3'
			};

		$.extend(requestData, data);

		request = $.ajax(
			addressString,
			{
				data: requestData,
				dataType: 'jsonp'
			}
		);

		$.when(request)
			.done(doneCallback)
			.fail(failCallback);
	},

	getProjectList: function() {
		return $.ajax(
			'http://catalog.api.2gis.ru/project/list', 
			{
				data: {
					'key': PIN.Application.options.DGApiKey,
					'output': 'jsonp',
					'version': '1.3'
				},
				dataType: 'jsonp'
			}
		);
	}

};
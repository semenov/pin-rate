PIN.Plugins.Map = {

	map: null,

	/**
	 * Shows project default view on map
	 * @param {Object} options:
	 * - coordinates
	 * - zoom
	 */
	showProject: function(coordinates) {
		if (PIN.Plugins.Map.map === null) {
	        this.map = new DG.Map('map');
	        this.map.setCenter(new DG.GeoPoint(coordinates[1], coordinates[0]),11);
		} else {
			this.map.setCenter(new DG.GeoPoint(coordinates[1], coordinates[0]),11);
		}
	}

};
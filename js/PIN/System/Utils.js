PIN.System.Utils = {

	/**
	 * Cookies
	 */
	getCookie: function(name) { 
		var prefix = name + "=",
			cookieStartIndex = document.cookie.indexOf(prefix);

		if (cookieStartIndex == -1) return null; 
		var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);

		if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;

		return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex)); 
	},

	setCookie: function(name, value) { 
	    var valueEscaped = escape(value),
	    	expiresDate = new Date();

	    expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1000);
	    var expires = expiresDate.toGMTString(),
	    	newCookie = name + "=" + valueEscaped + "; path=/; expires=" + expires; 

	    if (valueEscaped.length <= 4000) document.cookie = newCookie + ";"; 
	}

};
var offliner = (function() {
	return {
		addCachingIframe: function() {
			$( document.body ).prepend(
				'<iframe src="/offline-ala/offline.html" style="position:absolute;top:-999em;visibility:hidden"></iframe>'
			);
		}
	};
})();
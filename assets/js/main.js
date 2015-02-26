require.config({
	paths: {
		jquery: 'vendor/jquery/jquery',
	}
});
require([

	], function($){
		$('body').html('test page');

});
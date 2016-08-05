const OptionsApiUtil = {

  fetchOptions(success) {
		$.ajax({
			url: '/api/events',
			type: 'GET',
			success: function(options){
        success(options);
      }
		});
	},

  changeOptions(params, success) {
    $.ajax({
			url: '/api/events',
			type: 'GET',
      data: { event: params },
			success: function(options){
        success(options);
      }
		});
  }

};

module.exports = OptionsApiUtil;

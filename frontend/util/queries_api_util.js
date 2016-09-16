const QueriesApiUtil = {

  fetchQueries(user_id, success) {
		$.ajax({
			url: '/api/queries',
			type: 'GET',
      data: { query: { user_id: user_id } },
			success: function(queries){
        success(queries);
      }
		});
	},

  saveQuery(params, success) {
    $.ajax({
			url: '/api/queries',
			type: 'POST',
      data: { query: params },
			success: function(queries){
        success(queries);
      }
		});
  },

  deleteQuery(id, success) {
    $.ajax({
			url: '/api/queries/' + id,
			type: 'DELETE',
			success: function(queries){
        success(queries);
      }
		});
  }

};

module.exports = QueriesApiUtil;

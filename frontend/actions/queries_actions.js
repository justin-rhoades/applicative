const AppDispatcher = require('../dispatcher/dispatcher');
const QueriesConstants = require('../constants/queries_constants');
const QueriesApiUtil = require('../util/queries_api_util');

const SessionStore = require('../stores/session_store');

const QueriesActions = {

  fetchQueries(user_id) {
    QueriesApiUtil.fetchQueries(user_id, QueriesActions.receiveQueries);
  },

  fetchDashQueries(user_id) {
    QueriesApiUtil.fetchDashQueries(user_id, QueriesActions.receiveDashQueries);
  },

  fetchDashQueriesOptions(queries) {
    QueriesApiUtil.fetchDashQueriesOptions(queries, QueriesActions.receiveDashQueriesOptions);
  },

  saveQuery(params) {
    QueriesApiUtil.saveQuery(params, QueriesActions.receiveQueries);

    QueriesActions.fetchQueries(SessionStore.currentUser().id);
  },

  deleteQuery(id) {
    QueriesApiUtil.deleteQuery(id, QueriesActions.receiveQueries);

  },

  showQueries(queries) {
    return queries;
  },

  addQueryToDash(params) {
    QueriesApiUtil.addQueryToDash(params, QueriesActions.receiveDashQueries);
  },

  receiveQueries(queries) {
    AppDispatcher.dispatch({
      actionType: QueriesConstants.QUERIES_RECEIVED,
      queries: queries
    });
  },

  receiveDashQueries(queries) {
    AppDispatcher.dispatch({
      actionType: QueriesConstants.DASH_QUERIES_RECEIVED,
      queries: queries
    });
  },

  receiveDashQueriesOptions(queries) {
    AppDispatcher.dispatch({
      actionType: QueriesConstants.DASH_QUERIES_OPTIONS_RECEIVED,
      queries: queries
    });
  }

};

module.exports = QueriesActions;
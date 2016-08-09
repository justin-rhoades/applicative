const React = require('react');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');

const OptionsStore = require('../stores/options_store');
const OptionsActions = require('../actions/options_actions');

const SegChart = require('./seg_chart');
const RightNav = require('./right_nav');

const Segmentation = React.createClass({
  getInitialState(){
    return({options: OptionsStore.all().segmentation});
  },

  _optionsChanged() {
    this.setState({options: OptionsStore.all().segmentation});

  },

  componentDidMount() {
    this.optionsListener = OptionsStore.addListener(this._optionsChanged);
  },

  componentWillUnmount() {
    this.optionsListener.remove();
  },

  _handleRemove(event) {
    OptionsStore.removeEvent(event);

    OptionsActions.changeOptions(OptionsStore.all().segmentation.query);
  },

  render(){
    let query = { events: [], properties: [] };

    if (this.state.options.query) {
      query = this.state.options.query;
    }

    return(
      <div className="segmentation">
        <header className="seg-head">
          <h1 id="seg-head-title">Segmentation</h1>
          <span id="seg-head-right">You are exploring Applicative on your own</span>
        </header>

        <div className='seg-body group'>
          <div className='seg-query-chart'>
            <div className='seg-query-bar'>
              {
                query.events.map( event => {
                  return (
                    <div>
                      {event}
                      <input id="remove" className="event-remove" type="submit" value="Remove" onClick={ this._handleRemove.bind(this, event) } />
                    </div>
                  );
                })
              }
            </div>
            <div className='seg-chart-outer'>
                <SegChart
                  options={this.state.options}
                />
            </div>
          </div>
          <div className="seg-options">
            <RightNav
              query={query}
            />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = DragDropContext(HTML5Backend)(Segmentation);
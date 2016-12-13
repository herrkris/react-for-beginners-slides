import React, { Component } from 'react';
import { Step } from 'react-presents';
import ImageSlide from '../components/ImageSlide';
import Code from '../components/BigCode';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.start };
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <p style={{
            fontSize: '6vw',
            color: '#002452',
            fontFamily: 'Roboto',
            textAlign: 'center',
        }}>{this.state.count}</p>
    }
}

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    render() {
        return (
            <ImageSlide style={{
                backgroundImage: `url(images/components.jpg)`
            }} code>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Step index={0} exact>
                        <Timer start={0} />
                    </Step>

                    <Step index={1} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;








`}</Code>
                    </Step>
                    <Step index={2} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {





}, 1000)`}</Code>
                    </Step>
                    <Step index={3} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {




  count = count + 1;
}, 1000)`}</Code>
                    </Step>
                    <Step index={4} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {
  ReactDOM.render(


  );
  count = count + 1;
}, 1000)`}</Code>
                    </Step>
                    <Step index={5} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {
  ReactDOM.render(
    React.DOM.p(null, count),

  );
  count = count + 1;
}, 1000)`}</Code>
                    </Step>
                    <Step index={6} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {
  ReactDOM.render(
    React.DOM.p(null, count),
    document.querySelector('#app')
  );
  count = count + 1;
}, 1000)`}</Code>
                    </Step>
                    <Step index={7} exact>
                        <Timer start={0} />
                    </Step>
                    <Step index={8} exact>
                        <Code align="left" multiline width="80vw">{`let count = 0;

setInterval(function() {
  ReactDOM.render(
    React.DOM.p(null, count),
    document.querySelector('#app')
  );
  count = count + 1;
}, 1000)`}</Code>
                    </Step>
                    <Step index={9} exact>
                    <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({












  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>
                    <Step index={10} exact>
                        <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({
  getInitialState: function() {



  },







  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>
                    <Step index={11} exact>
                        <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },







  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>
                    <Step index={12} exact>
                        <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  componentDidMount: function() {



  }

  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>
                    <Step index={13} exact>
                        <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  componentDidMount: function() {
    setInterval(function() {

    }, 1000);
  }

  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>

                    <Step index={14} exact>
                        <Code align="left" size="2.5vw" width="80vw" multiline>{`const Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  componentDidMount: function() {
    setInterval(function() {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render: function() {
    return React.DOM.p(null, this.state.count);
  }
});`}</Code></Step>
                    <Step index={15} exact>
                        <div>
                        <Code align="left" multiline>{`ReactDOM.render(
  React.createElement(Timer, null),
  document.querySelector('#app')
);`}</Code>
                    <Timer start={0} />
                        </div>
                    </Step>
                </div>
            </ImageSlide>
        );
    }
}

Slide.title = 'React Component';

export default Slide;
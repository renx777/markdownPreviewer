"use strict";

/*problem you are facing 
1.how do you properly change innerhtml of a div
2.updating of text is not in sync
*/

var Photo = React.createClass({
  displayName: "Photo",

  // set initial state: value is set to default text you like to appear

  getInitialState: function getInitialState() {
    return {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'

    };
  },

  /*after component has mounted that is rendered
  you get the value of textarea
  use marked library to convert it to get html equivalent
  change the inner html of result div where you like to display converted markdown
  */
  componentDidMount: function componentDidMount() {
    var out = marked(this.state.value);
    this.setState({
      output: out
    });
  },

  /*
  1.when user clicks to enter text,changeMark is triggered everytime
  2.state is changed by equating value to clicked component's value
  3.
  */
  changeMark: function changeMark(e) {
    this.setState({
      value: e.target.value
    });
  },

  createMarkup: function createMarkup() {
    var outs = marked(this.state.value);
    var k = outs;

    return { __html: k };
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement("textarea", { name: "", id: "grey", cols: "66", rows: "22", value: this.state.value, onChange: this.changeMark, onKeyPress: this.changeMark })
          ),
          React.createElement(
            "div",
            { className: "col-md-6" },
            " ",
            React.createElement("div", { id: "mrk", dangerouslySetInnerHTML: this.createMarkup() })
          )
        )
      )
    );
  }
});

React.render(React.createElement(Photo, null), document.getElementById("markdown"));
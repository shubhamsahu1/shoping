import React from "react";
import classnames from "classnames";

class Offer extends React.Component {
  state = {
    slideIndex: 1
  };
  showDivs = n => {};
  plusDivs = n => {
    n = this.state.slideIndex + n;
    if (n > 5) {
      this.setState({ slideIndex: 1 });
    } else if (n < 1) {
      this.setState({ slideIndex: 5 });
    } else {
      this.setState({ slideIndex: n });
    }
  };

  currentDiv = n => {
      this.setState({slideIndex:n})
  };

  componentDidMount() {
    this.showDivs(this.slideIndex);
  }
  render() {
    return (
      <div>
        <div className="content display-container">
          <img
            className={classnames({
              show: this.state.slideIndex === 1,
              animateFading: 1
            })}
            alt="offer1"
            src={require("./asset/offer1.jpg")}
            style={{ width: "100%" }}
          />
          <img
            className={classnames({
              show: this.state.slideIndex === 2,
              animateFading: 1
            })}
            alt="offer2"
            src={require("./asset/offer2.jpg")}
            style={{ width: "100%" }}
          />
          <img
            className={classnames({
              show: this.state.slideIndex === 3,
              animateFading: 1
            })}
            alt="offer3"
            src={require("./asset/offer3.jpg")}
            style={{ width: "100%" }}
          />
          <img
            className={classnames({
              show: this.state.slideIndex === 4,
              animateFading: 1
            })}
            alt="offer4"
            src={require("./asset/offer4.jpg")}
            style={{ width: "100%" }}
          />
          <img
            className={classnames({
              show: this.state.slideIndex === 5,
              animateFading: 1
            })}
            alt="offer5"
            src={require("./asset/offer5.jpg")}
            style={{ width: "100%" }}
          />
          <div className="nav-container" style={{ width: "100%" }}>
            <div className="left arrow" onClick={() => this.plusDivs(-1)}>
              PREV
            </div>
            <div className="right arrow" onClick={() => this.plusDivs(1)}>
              NEXT
            </div>
          </div>
          <div
            className="nav-container nav-container-badge"
            style={{ width: "100%" }}
          >
            {[1, 2, 3, 4, 5].map((val,i) => {
              return (
                <span className={classnames({
                    badgeSelected: this.state.slideIndex === val,
                    badge: 1
                  })}  key={val} onClick={()=>this.currentDiv(val)}></span>
              );
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Offer;

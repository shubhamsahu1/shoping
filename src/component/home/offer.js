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
        {[1, 2, 3, 4, 5].map((val,i) => {
              return (
                <img
                className={classnames({
                  show: this.state.slideIndex === val,
                  animateFading: 1
                })}
                alt={`offer${val}`}
                src={require(`./asset/offer${val}.jpg`)}
                style={{ width: "100%" }}
              />
              )
        })}
        
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

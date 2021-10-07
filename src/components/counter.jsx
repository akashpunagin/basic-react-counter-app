import React from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Hey, we should update counter: ", this.props.counter.id);
    }
  }

  componentWillUnmount() {
    console.log("Counter ", this.props.counter.id, " unmounted");
  }

  render() {
    console.log("Counter - rendered -", this.props.counter.id);
    return (
      <React.Fragment>
        <h4>Child: {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>
          {this.getFormatedCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <br />
      </React.Fragment>
    );
  }

  getFormatedCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }
}

export default Counter;

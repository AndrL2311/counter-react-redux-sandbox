import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as action from "../../redux/actions";
import "./Counter.css";

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        // step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      Counter
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(action.increment(5)),
    onDecrement: () => dispatch(action.decrement(5)),
  };
};

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

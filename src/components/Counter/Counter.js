import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as action from "../../redux/actions";
import "./Counter.css";

function Counter({ value, onIncrement, onDecrement, step }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      Counter
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(action.increment(1)),
    onDecrement: () => dispatch(action.decrement(1)),
  };
};

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

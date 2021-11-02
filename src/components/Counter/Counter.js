import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as action from "../../redux/counter/counter-actions";
import "./Counter.css";

function Counter({ value, onIncrement, onDecrement, step }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
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
    onIncrement: (value) => dispatch(action.increment(value)),
    onDecrement: (value) => dispatch(action.decrement(value)),
  };
};

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

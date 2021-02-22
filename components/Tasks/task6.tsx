import * as React from "react";
import TaskBase from "./taskBase";

const Task6 = () => {
  return (
    <TaskBase
      title="Task 6: Detect if annotations overlap"
      goal="Indicate if an annotation overlaps with another annotation(s)"
    >
      Two or more annotations may overlap, and we would like to indicate an
      overlap as an error on the annotation container (see Task 5).
    </TaskBase>
  );
};

export default Task6;

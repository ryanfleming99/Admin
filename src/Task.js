import React from "react";
import TaskSpacing from "./styled-components/TaskSpacing";
import CheckBox from "./styled-components/CheckBox";
import TaskName from "./styled-components/TaskName"

/* const StyledTask = styled.div`
`; */

export default function TaskList({ task, toggleTask }) {
  function handleTaskClick() {
    toggleTask(task.id);
  }

  // imported task above in the function params
  // using checked={task.complete} to determine when input has been reacted with
  return (
    <>
      <TaskSpacing>
      <TaskName>{task.name}</TaskName>
        <CheckBox
          type="checkbox"
          checked={task.complete}
          onChange={handleTaskClick}
        />
      </TaskSpacing>
    </>
  );
}

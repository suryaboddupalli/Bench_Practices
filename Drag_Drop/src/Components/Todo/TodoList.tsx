import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

type data = {
  input: string;
  isDone: boolean;
  id: number;
};

type propsData = {
  Data: data;
  id: number;
  onDragEnd: any;
  index: number;
};

function TodoList(props: propsData) {
  return (
    <div>
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable
                key={props.id}
                draggableId={props.id.toString()}
                index={props.index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {props.Data.input}
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    // <div>
    //   <div>{props.Data.input}</div>
    //   <div>{props.Data.isDone}</div>
    // </div>
  );
}

export default TodoList;

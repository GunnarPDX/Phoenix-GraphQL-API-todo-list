import '../App.css'
import React from "react";
import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"


interface TodoItem {
    id: number | string;
    content: string;
    isCompleted: boolean;
}

interface TodoItemsQueryResult {
    todoItems: TodoItem[];
}


const TodoList = () => {
    const {data, loading} = useQuery<TodoItemsQueryResult>(gql`
    {
      todoItems{
        id content isCompleted
      }
    }
    `);

    return <div className={"todo-list"}>
        <h1> Todo Items</h1>
        <ul>
            {data?.todoItems ? data.todoItems.map(item => (
                <li key={item.id} className={ item.isCompleted ? "completed" : ""}>
                    {item.content}
                </li>
            )) : null}
        </ul>
    </div>
};

export default TodoList;

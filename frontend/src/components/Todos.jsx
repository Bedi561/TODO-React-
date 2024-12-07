/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// as an array we are here doing object destructuring

export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}
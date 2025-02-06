export function CreateTodo(){
    return <div>
        <input style ={{
            padding :10
        }}/>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description"/>

        <button> Add a TODO </button>
    </div>
}

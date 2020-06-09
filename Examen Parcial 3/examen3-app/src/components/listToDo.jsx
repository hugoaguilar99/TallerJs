import React, { useEffect,useState } from 'react';
import {firebase} from '../firebase'



const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [todesc, setToDesc] = useState('')
    const [toPryo, setToPryo] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [todoId, setTodoId] = useState('')

    useEffect(()=> {
        const getData = async () => {
            const db = firebase.firestore()
            try{
                const data = await db.collection('Task').get()
                const arrayData = data.docs.map(doc => ({id:doc.id, ... doc.data()}))
                console.log(arrayData)
                setTodos(arrayData)
            }catch(error) {
                console.log(error)
            }   
        }
        getData()
    },[])

    const add = async(e) =>{
        e.preventDefault()
        if(!todo.trim()){
            console.log("sin texto")
            return
        }
        try{
            const db = firebase.firestore()
            const data = await db.collection('Task').add({
                name: todo,
                description: todesc,
                pryority : toPryo
            })
            const todoNew= {
                name : todo,
                description: todesc,
                pryority : toPryo
            }
            
            setTodos([
                ...todos,
                {id : data.id, ...todoNew}
            ])
            setTodo("")
        } catch(error){
            console.log(error)
        }
    }

    const deleteTodo = async(id) =>{
        try{
            const db = firebase.firestore()
            await db.collection("Task").doc(id).delete()

            const todosFilter = todos.filter(item => item.id !== id)
            setTodos(todosFilter)

        }catch(error){
            console.log(error)
        }
    }

    const edit = async(e) =>{
        e.preventDefault()
        if(!todo.trim()){
            console.log ("sin texto")
            return
        }
        try{
            const db = firebase.firestore()
            await db.collection("Task").doc(todoId).update({
                name: todo,
                description : todesc,
                pryority : toPryo
            })
            const arrayEdit = todos.map(item => (
                item.id === todoId ? {id: item.id,name :todo,description :todesc, pryority : toPryo} : item
            ))
            setTodos(arrayEdit)
            setTodo("")
            setToDesc("")
            setTodoId("")
            setToPryo("")
            setEditMode(false)
        }catch(error){
            console.log(error)
        }
    }

     return (
        <div>
            Añadir nueva tarea
            <br/>
            <form onSubmit = {editMode ? edit : add}>
                  Name : <input type = "text"
                    placeholder = "add Todo"
                    value = {todo}
                    onChange = {e => setTodo(e.target.value)}
                />
                <br/>
                Description : <input type = "text"
                    placeholder = "add Todesc"
                    value = {todesc}
                    onChange = {e => setToDesc(e.target.value)}
                />
                <br/>
                pryority : <input type = "text"
                    placeholder = "add ToPryo"
                    value = {toPryo}
                    onChange = {e => setToPryo(e.target.value)}
                />
                <br/>
                <button type = "submit"  >
                    {
                        editMode ? "edit" : "add"
                    }
                </button>
            </form>

            <br/>
            Lista tareas :
            
            <ul className="list-group">
                {
                todos.map(item =>(
                    <li className = "list-group-item" key ={item.id}>

                        <span>Id tarea : {item.id}</span>
                        <br/>
                        <span>Nombre tarea : {item.name}</span>
                        <br/>
                        <span>Descricion : {item.description}</span>
                        <br/>
                        <span>prioridad : {item.pryority}</span>
                        <br/>
                        <span>  <button onClick = {() => {deleteTodo(item.id)}}>Delete</button></span>
                        <span> <button onClick = { 
                            () => {setTodo(item.name) ; setTodoId(item.id); setToDesc(item.description); setToPryo(item.pryority) ; setEditMode(item.id)}}>Editar</button> </span>
                    </li>
                ))   
                }
            </ul>
        </div >
    );
}

export default TodoList;
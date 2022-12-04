import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './home.css';

const Home = () => {
    const [todos, setTodos] = useState([
        {
            'id': 1,
            'title': 'makan',
            'completed': false
        },
        {
            'id': 2,
            'title': 'mandi',
            'completed': false
        },
        {
            'id': 3,
            'title': 'belajar react',
            'completed': false
        },
        {
            'id': 4,
            'title': 'tidur',
            'completed': false
        }
    ]);
    const [input, setInput] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {title: input}]);
        setInput('');
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id != id))
    };

    const handleCompleted = (id) => {
        setTodos(todos.map(item => {
            if(item.id === id) {
                return {...item, completed: !item.completed}
            } else return item
        }))
    }

    return (
        <div className="home">
            <div className="home-container">
                <h1 className='home__title'>Todo App</h1>
                <div>
                    <form className="home__form" onSubmit={handleSubmit}>
                        <input className='home__form-input' value={input} type="text" placeholder='Enter a todo . . .' onChange={(e) => setInput(e.target.value)}/>
                        <Button className='home__form-button' variant="success">Add</Button>
                    </form>
                </div>
                <div>
                    {
                        todos.map(todo => (
                            <div className="home__todos">
                                <p className={`home__todos-title ${todo.completed? 'completed': ''}`}>{todo.title}</p>
                                <div className="home__todos-button">
                                    <Button onClick={() => handleCompleted(todo.id)} variant="warning">Finish</Button>
                                    <Button onClick={() => handleDelete(todo.id)} variant="danger">Delete</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

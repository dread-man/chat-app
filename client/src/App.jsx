import io from 'socket.io-client'
import styles from './App.module.scss'
import { useState } from 'react'
import { Chat } from './components/Chat'

const socket = io.connect('http://localhost:3001')

function App() {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    const joinRoom = () => {
        if (username !== '' && room !== '') {
			socket.emit('join_room', room, username)
        }
    }

    return (
        <div className={styles.App}>
            <h3>Join a Chat</h3>
            <input
                type="text"
                placeholder="John..."
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => setRoom(event.target.value)}
            />
            <button onClick={joinRoom}>Join A Room</button>
			<Chat socket={socket} username={username} room={room}/>
        </div>
    )
}

export default App

import React, { useState } from 'react'
import styles from './Chat.module.scss'

export function Chat({ socket, username, room }) {

	const [currentMessage, setCurrentMessage] = useState('')

	const sendMessage = () => {
		if(currentMessage !== '') {
			const messageData = {
				room: room,
				aurhor: username,
				message: currentMessage,
				time: new Date(Data.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
			}
		}
	}

    return <div>
		<div className={styles.chatHeader}>
			<p>Live Chat</p>
		</div>
		<div className={styles.chatBody}>

		</div>
		<div className={styles.chatFooter}>
			<input type="text" placeholder='Hey...' onChange={(event) => setCurrentMessage(event.target.value)}/>
			<button onClick={sendMessage}>&#9658;</button>
		</div>
	</div>
}

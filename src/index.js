import React from 'react'
import ReactDOM from 'react-dom'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { types } from "mobx-state-tree"
import QrCode from './qrCode'


// 这里是master分支的修改
// 将Dev合并到master分支上

// git报错

let appState = observable({ timer: 0 })

setInterval(action(() => {
	appState.timer += 1
}), 1000)

appState.resetTimer = action(() => {
	appState.timer = 0;
})

// ----------mobx-state-tree---------

const Todo = types
	.model({
		title: types.string
	})
	.actions(self => ({
		setTitle(val) {
			self.title = val;
		}
	}))
	.views(self => ({
		get newTitle() {
			return 'new:' + self.title;
		}
	}))

const coffeeTodo = Todo.create({
	title: 'Get coffee'
})
coffeeTodo.setTitle('Drink coffee')

const Test1 = types
	.model()
	.named('named')
	.props({ name: types.string })
	
const TestName = Test1.create({ name: 'test name' })

console.log(TestName)

let App = observer(({ appState }) => {
	return (
		<div className="App">
			<h1>Time passed : {appState.timer}</h1>
			<button onClick={appState.resetTimer}>reset timer</button>
			<QrCode></QrCode>
		</div>
	)
})

ReactDOM.render(<App appState={appState} />, document.getElementById('root'))

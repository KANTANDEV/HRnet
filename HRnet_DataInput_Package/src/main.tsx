import React from 'react'
import ReactDOM from 'react-dom'
import DataInput from './lib/DataInput'

const App = () => {
	return (
		<div>
			<DataInput id='inputName' type='text' name='name' label='Nom :' onChange={(event) => console.log(event.target.value)} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

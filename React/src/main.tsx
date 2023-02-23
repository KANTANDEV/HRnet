//* Importation des composants React
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//* Rendu du composant App dans l'élément HTML `root`
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)


//* Importation React
import { useState } from 'react'
//* importations des pages
import CreateEmployee from './pages/CreateEmployee'
import Employees from './pages/Employees'
//* Importation du style
import './index.css'

//? Fonction utilisée pour gérer les informations des employés
export type Employee = {
	firstName: string
	lastName: string
	dateOfBirth: string
	startDate: string
	department: string
	street: string
	city: string
	state: string
	zipCode: string
}

//? Fonction principale qui retourne un composant
export default () => {
	//? Les données des employés sont mise à jour avec cet état
	const [employees, setEmployees] = useState<Array<Employee>>([])

	//? L'état useState détermine quel page sera affichée
	const [page, setPage] = useState<String>('Home')

	return <>{page === 'Home' ? <CreateEmployee setPage={setPage} setEmployees={setEmployees} /> : <Employees setPage={setPage} employees={employees} />}</>
}


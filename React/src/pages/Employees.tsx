/**
 * @param {string} page - La page actuelle.
 * @param {Array<Employee>} employees - La liste des employés.
 * @param {(page: string) => void} setPage - Fonction pour changer la page.
 * @returns {JSX.Element} - Composant React.
 * @resume La page Employees affiche la liste des employés.
 */

//* Importation des composants nécessaires
import DataTable from '../components/DataTable'
//? Importation du type Employee
import type { Employee } from '../App'

//* Définition du type des propriétés
type PropsType = {
	setPage: (page: string) => void
	employees: Array<Employee>
}

//* Définition des colonnes de la table
const columns = [
	{ title: 'First Name', data: 'firstName' }, //! Spécifie le prénom de l'employé
	{ title: 'Last Name', data: 'lastName' }, //! Spécifie le nom de famille de l'employé
	{ title: 'Start Date', data: 'startDate' }, //! Spécifie la date de début du contrat de l'employé
	{ title: 'Department', data: 'department' }, //! Spécifie le département de l'employé
	{ title: 'Date of Birth', data: 'dateOfBirth' }, //! Spécifie la date de naissance de l'employé
	{ title: 'Street', data: 'street' }, //! Spécifie l'adresse (rue) de l'employé
	{ title: 'City', data: 'city' }, //! Spécifie la ville de résidence de l'employé
	{ title: 'State', data: 'state' }, //! Spécifie la région de l'employé
	{ title: 'Zip Code', data: 'zipCode' }, //! Spécifie le code postal de l'employé
]

export default ({ setPage, employees }: PropsType) => {
	return (
		<>
			<div id='employee-div' className='container mx-auto mt-10'>
				<h1 className='text-center text-3xl font-bold mb-5'>Current Employees</h1>
				<DataTable data={employees} columns={columns} /> //! Affiche les données sur les employés
				<div className='flex justify-center mt-5'>
					<a href='#' onClick={() => setPage('Home')} className='text-blue-500 hover:text-blue-800 font-bold text-center mb-2'>
						Home
					</a>{' '}
					{/* //! Retourne à la page Home */}
				</div>
			</div>
		</>
	)
}

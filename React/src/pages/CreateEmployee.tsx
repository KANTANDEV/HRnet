/**
 * @module pages/CreateEmployee
 * @see module:pages/App
 * @see module:pages/Employees
 * @resume La page `CreateEmployee` permet de créer un nouvel employé.
 */

//* Importer du type Employee
import type { Employee } from '../App'
//* Importation React
import { useState, ChangeEvent } from 'react'
//* Importation des composants
import Modal from '../components/Modal'
import SelectMenu from '../components/SelectMenu'
import { stateOptions, departmentOptions } from '../data/data.json'
import DataInput from '../components/DataInput'

//? Ajouter le type PropsType
type PropsType = {
	setPage: (page: String) => void
	setEmployees: (setEmployees: (prev: Array<Employee>) => Array<Employee>) => void
}

//! La déclaration de la function
export default ({ setPage, setEmployees }: PropsType) => {
	const [employee, setEmployee] = useState<Employee>({ firstName: '', lastName: '', dateOfBirth: '', startDate: '', department: departmentOptions[0], street: '', city: '', state: stateOptions[0].value, zipCode: '' })
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const [errorModalOpened, setErrorModalOpened] = useState<boolean>(false)

	//! Fonction pour enregistrer l'employé
	/**
	 * La fonction `saveEmployee` sert à sauvegarder les informations
	 * entrées par l'utilisateur concernant l'employé.
	 */
	const saveEmployee = (e: any) => {
		e.preventDefault()
		if (!Object.values(employee).every((field) => field !== '')) {
			return setErrorModalOpened(true)
		}
		setEmployees((prev: Array<Employee>) => [...prev, employee])
		setModalOpened(true)
	}

	//! Fermer le modal
	/**
	 * La fonction `handleCloseModal` permet de fermer le modal qui affiche
	 * les détails de l'employé ou un message d'erreur.
	 */
	const handleCloseModal = () => {
		setModalOpened(false)
		setErrorModalOpened(false)
		setPage('Employees')
	}

	//! Manipuler les entrées
	/**
	 * La fonction `handleInputChange` permet de manipuler les entrées
	 * effectuées par l'utilisateur.
	 */
	const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setEmployee((prev) => {
			return { ...prev, [name]: value }
		})
	}

	//! modal params
	const modalTitle = 'Success !'
	const modalErrTitle = 'Error !'

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
				<div className='title text-center'>
					<h1 className='text-3xl font-bold mb-2'>HRnet</h1>
				</div>
				<div className='container'>
					<a href='#' onClick={() => setPage('Employees')}>
						<div className='text-blue-700 hover:text-blue-500 font-bold text-center mb-2'>View Current Employees</div>
					</a>
					<h2 className='text-xl font-bold mb-2 mt-4 text-center'>Create Employee</h2>
					<form action='#' id='create-employee'>
						<div className='flex flex-col'>
							<DataInput id='first-name' type='text' name='firstName' label='First Name' onChange={handleInputChange} />
							<br />
							<DataInput id='last-name' type='text' name='lastName' label='Last Name' onChange={handleInputChange} />
							<br />
							<DataInput id='date-of-birth' type='date' name='dateOfBirth' label='Date of Birth' onChange={handleInputChange} />
							<br />
							<DataInput id='start-date' type='date' name='startDate' label='Start Date' onChange={handleInputChange} />
							<br />
							<fieldset className='address'>
								<legend className='font-bold mb-2'>Address</legend>
								<DataInput id='street' type='text' name='street' label='Street' onChange={handleInputChange} />
								<br />
								<DataInput id='city' type='text' name='city' label='City' onChange={handleInputChange} />
								<br />
								<SelectMenu id='state' name='state' label='State' data={stateOptions} onChange={handleInputChange} />
								<br />
								<DataInput id='zip-code' type='text' name='zipCode' label='Zip Code' onChange={handleInputChange} />
							</fieldset>
							<SelectMenu id='department' name='department' label='Department' data={departmentOptions} onChange={handleInputChange} />
						</div>
						<div className='flex justify-center'>
							<button className='bg-blue-700 hover:bg-blue-750 text-white font-bold py-2 px-4 rounded my-4' onClick={saveEmployee}>
								Save
							</button>
						</div>
					</form>
				</div>
				<Modal title={modalTitle} opened={modalOpened} onClose={handleCloseModal} content='Employee Created!' btnText='Close' />
				<Modal title={modalErrTitle} opened={errorModalOpened} onClose={handleCloseModal} content='Please fill all the fields' btnText='Close' />
			</div>
		</div>
	)
}

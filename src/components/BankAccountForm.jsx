import TitlePaymentForm from "./TitlePaymentForm"
import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import ConsultButtonPaymentForm from "./ConsultButtonPaymentForm"
import { useContext, useState, useEffect } from "react"
import { BankAccountsContext } from "../contexts/BankAccountsContext"
import ConfirmButtonsPayment from "./ConfirmButtonsPayment"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"

function BankAccountForm() {

    const { user, token } = useContext(UserContext)

    const { create, edit, setCreate, setEdit, selected, bankAccounts, setSelected, error } = useContext(BankAccountsContext)

    const [bankNumber, setBankNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [bankEmail, setBankEmail] = useState('')
    const [bankType, setBankType] = useState('')

    useEffect(() => {
        if (selected !== -1 && bankAccounts.length > 0) {
            setBankNumber(bankAccounts[selected].numero)
            setBankName(bankAccounts[selected].nombre_titular)
            setBankEmail(bankAccounts[selected].email)
            setBankType(bankAccounts[selected].banco)
        } else {
            setBankNumber('')
            setBankName('')
            setBankEmail('')
            setBankType('Western Bank')
        }
    }, [create, selected, bankAccounts])

    const handleCancel = (e) => {
        e.preventDefault()
        if (selected != -1) {
            setCreate(false)
            setEdit(false)
        } else {
            if (bankAccounts.length > 0) {
                setCreate(false)
                setSelected(0)
            }
        }
    }

    const validateData = () => {
        if (bankNumber.length != 16) {
            alert('El número de cuenta debe tener 16 dígitos')
            return false
        }
        if (bankName.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres')
            return false
        }
        if (bankEmail.length < 3) {
            alert('El email debe tener al menos 3 caracteres')
            return false
        }
        if (bankType.length < 3) {
            alert('Debe seleccionar un banco')
            return false
        }

        for (let i = 0; i < bankAccounts.length; i++) {
            if (bankAccounts[i].numero === bankNumber) {
                alert('El número de cuenta ya existe')
                return false
            }
        }

        return true
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (validateData()) {
            axios.post('http://localhost:3000/account/addcuenta', {
                numero: bankNumber,
                nombre_titular: bankName,
                email: bankEmail,
                banco: bankType,
                id: user.id
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            }).then(res => {
                alert('Cuenta agregada con éxito')
                setCreate(false)
                setSelected(0)
            }).catch(err => {
                alert('Error al agregar cuenta')
            })
        }

        // comporobar que la cuenta existe en el banco

    }

    const handleEdit = (e) => {
        setEdit(true)
    }

    const handleDelete = (e) => {
        axios.post('http://localhost:3000/account/deletecuenta', {
            id: bankAccounts[selected].id
        }, {
            headers: {
                'Authorization': `${token}`
            }
        }).then(res => {
            alert('Cuenta eliminada con éxito')
            setSelected(-1)
        }).catch(err => {
            alert('Error al eliminar cuenta')
        })


    }

    const propsTitle = {
        title: 'Información de la cuenta',
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        edit: edit,
        create: create
    }

    if (error) {
        return <h1>
            {error}
        </h1>
    }

    return (
        <div>
            <TitlePaymentForm {...propsTitle} />
            <form action="">
                <div className="flex flex-col gap-3">
                    <InputPaymentForm label="Número" type="number" name="numero" id="numero" blocked={!create && !edit} value={bankNumber} onChange={
                        (e) => {
                            setBankNumber(e.target.value)
                        }
                    } />
                    <InputPaymentForm label="Nombre" type="text" name="nombre" id="nombre" blocked={!create && !edit} value={bankName} onChange={
                        (e) => {
                            setBankName(e.target.value)
                        }
                    } />
                    <InputPaymentForm label="Correo electronico" type="text" name="email" id="email" blocked={!create && !edit} value={bankEmail} onChange={
                        (e) => {
                            setBankEmail(e.target.value)
                        }
                    } />
                    <div className="flex gap-3 items-end">
                        <SelectPaymentForm
                            options={[
                                { value: 'Eastern Bank', label: 'Eastern Bank' },
                                { value: 'Western Bank', label: 'Western Bank' },
                            ]}
                            blocked={!create && !edit}
                            label="Banco"
                            value={bankType}
                            onChange={
                                (e) => {
                                    setBankType(e.target.value)
                                }
                            }
                        />
                        <div className={
                            (create || edit) ?
                                'invisible flex items-end gap-3' :
                                'flex items-end gap-3'
                        }>
                            <InputPaymentForm label="Saldo" type="text" name="saldo" id="saldo" blocked={true} />
                            <ConsultButtonPaymentForm />
                        </div>

                    </div>
                    <ConfirmButtonsPayment handleCancel={handleCancel} handleSave={handleSave} create={create} edit={edit} />
                </div>
            </form>
        </div>
    )
}

export default BankAccountForm
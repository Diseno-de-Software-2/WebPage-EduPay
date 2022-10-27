import TitlePaymentForm from "./TitlePaymentForm"
import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import ConsultButtonPaymentForm from "./ConsultButtonPaymentForm"
import { useContext } from "react"
import { BankAccountsContext } from "../contexts/BankAccountsContext"
import ConfirmButtonsPayment from "./ConfirmButtonsPayment"

function BankAccountForm() {

    const { create, edit, setCreate, setEdit } = useContext(BankAccountsContext)

    const handleCancel = (e) => {
        e.preventDefault()
        setCreate(false)
        setEdit(false)
    }

    const handleSave = (e) => {
        e.preventDefault()
        setCreate(false)
        setEdit(false)
    }

    const handleEdit = (e) => {
        setEdit(true)
    }

    const handleDelete = (e) => {

    }

    const propsTitle = {
        title: 'Información de la cuenta',
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        edit: edit,
        create: create
    }

    return (
        <div>
            <TitlePaymentForm {...propsTitle} />
            <form action="">
                <div className="flex flex-col gap-3">
                    <InputPaymentForm label="Número" type="number" name="numero" id="numero" blocked={!create && !edit} />
                    <InputPaymentForm label="Nombre" type="text" name="nombre" id="nombre" blocked={!create && !edit} />
                    <InputPaymentForm label="Correo electronico" type="text" name="email" id="email" blocked={!create && !edit} />
                    <div className="flex gap-3 items-end">
                        <SelectPaymentForm
                            options={[
                                { value: '1', label: 'Banco 1' },
                                { value: '2', label: 'Banco 2' },
                            ]}
                            blocked={!create && !edit}
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
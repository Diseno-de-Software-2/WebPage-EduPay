import TitlePaymentForm from "./TitlePaymentForm"
import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import ConsultButtonPaymentForm from "./ConsultButtonPaymentForm"
import { useContext } from "react"
import { CreditCardsContext } from "../contexts/CreditCardsContext"
import ConfirmButtonsPayment from "./ConfirmButtonsPayment"

function CreditCartForm() {
    const { create, edit, setCreate, setEdit } = useContext(CreditCardsContext)

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
        title: 'Información de la tarjeta',
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
                    <InputPaymentForm label="Nombre" type="text" name="nombre" id="nombre" blocked={!create && !edit} />
                    <div className="flex gap-3">
                        <InputPaymentForm label="Fecha de expiración" type="text" name="fecha" id="fecha" blocked={!create && !edit} />
                        <InputPaymentForm label="Código de seguridad" type="number" name="codigo" id="codigo" blocked={!create && !edit} />
                        <SelectPaymentForm
                            options={[
                                { value: '1', label: 'Banco 1' },
                                { value: '2', label: 'Banco 2' },
                            ]}
                            blocked={!create && !edit}
                        />
                    </div>
                    <div className={
                        (create || edit) ?
                            'invisible flex items-end gap-3' :
                            'flex items-end gap-3'
                    }>
                        <InputPaymentForm label="Saldo" type="text" name="saldo" id="saldo" blocked={true} />
                        <ConsultButtonPaymentForm />
                    </div>
                    <ConfirmButtonsPayment handleCancel={handleCancel} handleSave={handleSave} create={create} edit={edit} />
                </div>
            </form>
        </div>
    )
}

export default CreditCartForm
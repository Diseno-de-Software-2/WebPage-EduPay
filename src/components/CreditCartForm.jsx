import TitlePaymentForm from "./TitlePaymentForm"
import InputPaymentForm from "./InputPaymentForm"
import SelectPaymentForm from "./SelectPaymentForm"
import ConsultButtonPaymentForm from "./ConsultButtonPaymentForm"
import { useContext, useState, useEffect } from "react"
import { CreditCardsContext } from "../contexts/CreditCardsContext"
import ConfirmButtonsPayment from "./ConfirmButtonsPayment"
import axios from 'axios'
import { UserContext } from "../contexts/UserContext"

function CreditCartForm() {

    const { user, token } = useContext(UserContext)

    const { create, edit, setCreate, setEdit, selected, creditCards, setSelected, error } = useContext(CreditCardsContext)

    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardDate, setCardDate] = useState('')
    const [cardCvv, setCardCvv] = useState('')
    const [cardProveedor, setCardProveedor] = useState('Visa')
    const [cardCredit, setCardCredit] = useState('')

    useEffect(() => {
        if (selected !== -1 && creditCards.length > 0) {
            setCardNumber(creditCards[selected].numero)
            setCardName(creditCards[selected].nombre_titular)
            setCardDate(creditCards[selected].fecha_expiracion.toString().split('T')[0])
            setCardCvv(creditCards[selected].cvv)
            setCardProveedor(creditCards[selected].proveedor)
        } else {
            setCardNumber('')
            setCardName('')
            setCardDate('')
            setCardCvv('')
            setCardProveedor('Visa')
        }
    }, [create, selected, creditCards])

    const handleCancel = (e) => {
        e.preventDefault()
        if (selected != -1) {
            setCreate(false)
            setEdit(false)
        } else {
            if (creditCards.length > 0) {
                setCreate(false)
                setSelected(0)
            }
        }
    }

    const validateData = () => {
        if (cardNumber.length != 16) {
            alert('El número de tarjeta debe tener 16 dígitos')
            return false
        }
        if (cardName.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres')
            return false
        }
        if (cardDate.length < 5) {
            alert('La fecha debe tener 5 caracteres')
            return false
        }
        if (cardCvv.length != 3) {
            alert('El CVV debe tener 3 caracteres')
            return false
        }
        if (cardProveedor.length < 3) {
            alert('Debe seleccionar un proveedor')
            return false
        }

        for (let i = 0; i < creditCards.length; i++) {
            if (creditCards[i].cardNumber == cardNumber) {
                alert('Ya existe una tarjeta con ese número')
                return false
            }
        }
        return true
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (validateData()) {
            if (selected == -1) {
                axios.post('http://localhost:3000/account/addtarjeta', {
                    id: user.id,
                    numero: cardNumber,
                    nombre_titular: cardName,
                    fecha_expiracion: cardDate,
                    cvv: cardCvv,
                    proveedor: cardProveedor
                }, {
                    headers: {
                        'Authorization': `${token}`
                    }
                }).then((response) => {
                    alert(response.data)
                    if (response.data == 'Tarjeta agregada') {
                        setCreate(false)
                        setSelected(0)
                    }
                }).catch((error) => {
                    alert('Error al agregar la tarjeta')
                })
            }
        }
    }

    const handleEdit = (e) => {
        setEdit(true)
    }

    const handleDelete = (e) => {
        axios.post(`http://localhost:3000/account/deletetarjeta`, {
            id: creditCards[selected].id,
        }, {
            headers: {
                'Authorization': `${token}`
            }
        }).then((response) => {
            alert('Tarjeta eliminada con éxito')
            setSelected(-1)
        }).catch((error) => {
            alert('Error al eliminar la tarjeta')
        })
    }

    const handleConsult = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:3000/balance/credito-tarjeta-${cardNumber}`, {
            headers: {
                'Authorization': `${token}`
            }
        }).then((response) => {
            if (response) {
                if (response.data == 'Consultas deshabilitadas') {
                    alert(response.data)
                } else {
                    setCardCredit(response.data.credito)
                }
            }
        }).catch((error) => {
            alert('Error al consultar el saldo')
        })
    }

    const propsTitle = {
        title: 'Información de la tarjeta',
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        edit: edit,
        create: create
    }

    if (error) {
        return <h1 className="text-red-600 text-xl">
            {error}
        </h1>
    }

    return (
        <div>
            <TitlePaymentForm {...propsTitle} />
            <form action="">
                <div className="flex flex-col gap-3">
                    <InputPaymentForm label="Número" type="number" name="numero" id="numero" blocked={!create && !edit} value={cardNumber} onChange={
                        (e) => {
                            setCardNumber(e.target.value)
                        }
                    } />
                    <InputPaymentForm label="Nombre" type="text" name="nombre" id="nombre" blocked={!create && !edit} value={cardName} onChange={
                        (e) => {
                            setCardName(e.target.value)
                        }
                    } />
                    <div className="flex gap-3">
                        <InputPaymentForm label="Fecha de expiración" type="date" name="fecha" id="fecha" blocked={!create && !edit} value={cardDate} onChange={
                            (e) => {
                                setCardDate(e.target.value)
                            }
                        } />
                        <InputPaymentForm label="Código de seguridad" type="number" name="codigo" id="codigo" blocked={!create && !edit} value={cardCvv} onChange={
                            (e) => {
                                setCardCvv(e.target.value)
                            }
                        } />
                        <SelectPaymentForm
                            label="Proveedor"
                            options={[
                                { value: 'Visa', label: 'Visa' },
                                { value: 'Mastercard', label: 'Mastercard' },
                                { value: 'American Express', label: 'American Express' },
                            ]}
                            blocked={!create && !edit}
                            value={cardProveedor}
                            onChange={
                                (e) => {
                                    setCardProveedor(e.target.value)
                                }
                            }
                        />
                    </div>
                    <div className={
                        (create || edit) ?
                            'invisible flex items-end gap-3' :
                            'flex items-end gap-3'
                    }>
                        <InputPaymentForm label="Saldo" type="text" name="saldo" id="saldo" blocked={true} value={cardCredit} />
                        <ConsultButtonPaymentForm handleConsult={handleConsult} />
                    </div>
                    <ConfirmButtonsPayment handleCancel={handleCancel} handleSave={handleSave} create={create} edit={edit} />
                </div>
            </form>
        </div>
    )
}

export default CreditCartForm
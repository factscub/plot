import React, { useState } from 'react'
import { checkbox } from '../../utils'
import { Input, Label } from './styles'

export const Column = ({ field, fields, setfields }) => {
    const [checked, setChecked] = useState(checkbox(field, fields))

    const handleCheckBox = (e) => {
        setChecked(e.target.checked)
        const filterFields = fields.filter(field => e.target.value !== field)
        if (e.target.checked) filterFields.push(field)
        setfields([...filterFields])

    }
    return (
        <Label>{field}
            <Input type='checkbox' onChange={handleCheckBox} value={field} checked={checked} />
        </Label>
    )
}

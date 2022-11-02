import React, { useEffect, useState } from 'react'
import { filterData, getKeys } from '../../utils'
import { Column } from './Column'
import { Wrapper } from './styles'

export const Columns = ({ setcolumns, customerData }) => {
    const keys = getKeys(customerData)
    const [fields, setfields] = useState(keys)

    useEffect(() => {
        const filteredData = filterData(customerData, fields)
        setcolumns(filteredData)
    }, [fields, customerData])

    return (
        <Wrapper>

            {
                keys.map(field => <Column key={field} {...{ field, fields, setfields }} />)
            }

        </Wrapper>
    )
}

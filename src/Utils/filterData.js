

export const filterData = ( customerData, fields ) => {

  let result = customerData.map(customer => {
    const data = { ...customer }

    for (const key in data) {
      if (!fields.includes(key)) {
        delete data[key]
      }
    }
    return data

  })

  return result
}
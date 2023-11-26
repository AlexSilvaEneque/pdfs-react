import { format } from 'date-fns'

export const convertoDDMMYYYY = (isoDate : any) => {
    const newDate = new Date(isoDate)
    const formattedDate = format(newDate, 'dd/MM/yyyy')
    return formattedDate
}

export const formatCurrency = (param:number) => {
    return param.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })
}

export const splitDate = (date: any) => {
    const newDate = new Date(date)
    const formattedDate = format(newDate, 'dd/MM/yyyy')

    const day = formattedDate.split('/')[0]
    const month = formattedDate.split('/')[1]
    const year = formattedDate.split('/')[2]

    return {day, month, year}
}
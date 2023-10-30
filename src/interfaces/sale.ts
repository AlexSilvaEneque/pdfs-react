export interface Sale {
    _id: string
    payment_type: string
    tax: {
        $numberDecimal: number
    }
    total: {
        $numberDecimal: number
    }
    discount: {
        $numberDecimal: number
    }
    status: boolean
    date: Date
    detailProducts: DetailProduct[]
    user: User | null
    client: Client | null
    statusPayment: boolean
}


interface Client {
    _id?: string
    name?: string
    type?: number
    doc?: string
    address?: string
    phone?: string
    status?: boolean
    label?: string
    value?: string
}

interface User {
    _id?: string
    first_name: string
    last_name: string
    email: string
    username?: string
    phone?: string
    password: string
}

interface DetailProduct {
    quantity: number,
    products: Product
}

interface Product {
    _id?: string
    name?: string
    price?: {
        $numberDecimal: number
    }
    type?: number
    quantity?: number
    status?: boolean
}
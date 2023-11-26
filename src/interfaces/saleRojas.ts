interface ProductRojas {
    id: string
    name: string
    price_sale: number
}

interface DetailsRojas {
    id: string
    quantity: number
    product: ProductRojas
}

export interface SaleRojas {
    id: string
    date: Date
    total: number
    status: true
    statusSale: number
    paid: number
    numberNota: string | null
    user: {
        name: string
    }
    client: {
        name: string
        address: string | null
        phone: string | null
    }
    details: DetailsRojas[]
}
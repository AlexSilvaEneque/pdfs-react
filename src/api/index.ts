import api from "@/lib/axios";

export default {
    getSaleById(id : string) {
        return api.get(`/sale/${id}`)
    },

    getSaleRojas(id: string) {
        return api.get(`${process.env.NEXT_PUBLIC_API_ROJAS}${id}`)
    }
}
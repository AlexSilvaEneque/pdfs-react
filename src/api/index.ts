import api from "@/lib/axios";

export default {
    getSaleById(id : string) {
        return api.get(`/sale/${id}`)
    }
}
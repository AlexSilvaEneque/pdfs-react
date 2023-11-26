"use client"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import Layout from "@/app/layout"
import { useEffect, useState } from "react"
import saleAPI from "@/api/index"


const PDF = dynamic(() => import("@/components/Boleta"), {
    ssr: false
})

export default function ViewPage() {
    const router = useRouter()
    const { id } = router.query

    const [sale, setSale] = useState(null)

    useEffect(() => {
        if (id) {
            saleAPI.getSaleRojas(id as string)
                .then(res => setSale(res.data))
                .catch(err => console.log(err))
        }
    }, [id])
    

    return (
        <Layout>
            <PDF sale={sale} />
        </Layout>
    )
}
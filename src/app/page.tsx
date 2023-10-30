import dynamic from "next/dynamic"

const PDF = dynamic(() => import("@/components/PDF"), {
    ssr: false
})


export default function Home() {
  return (
      <div></div>
  )
}

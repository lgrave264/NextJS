import { useRouter } from "next/router";
import Head from "next/head";

export default function Car({car}){
    const router = useRouter();
    const {id} = router.query

    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
            //you change the head here
        </Head>
        <h1>Hello {id}</h1>
        <img src={car.image} width="300px"/>
    </>)
}

// export async function getStaticProps({params}) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json()
//     return{
//         props:{car:data},
//     }
// }

// export const getStaticPaths=async()=>{
//     const req = await fetch("http://localhost:3000/cars.json")
//     const data = await req.json()

//     const paths = data.map((car)=>{
//         return {params : {id:car}}
//     })

//     return {paths, fallback:false}
// }

export const getStaticServerSideProps = async({params})=>{
    const req = await fetch("http://localhost:3000/cars.json")
    const data = await req.json()

    const paths = data.map((car)=>{
        return {params : {id:car}}
    })

    return {paths, fallback:false}
}

// export default function Car(){
//     const router = useRouter();
//     const {id} = router.query

//     return <h1>Hello {id}</h1>
// }
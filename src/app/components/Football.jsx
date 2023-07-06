import Image from "next/image"


export default function Football({list}) {
    const footballerList = list.map(football => (
        <section>
            <Image src={football.image} alt={football.name} width={400} height={400}/>
            <h2>{football.name}</h2>
            <h2>{football.age}</h2>
            <h2>{football.country}</h2>
            <h2>{football.description}</h2>
        </section>
    ))


  return (
    <div className="grid grid-cols-3 gap-10 bg--300">{footballerList}</div>
  )
}

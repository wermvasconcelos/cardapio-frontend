import "./card.css"
interface CardProps{
    price:number,
    title:string,
    image:string
}

export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={title} /> {/* Use src e alt para a tag img */}
            <h2>{title}</h2> {/* Exiba o título */}
            <p><b>Valor:</b> {price}</p> {/* Exiba o preço */}
        </div>
    )
}


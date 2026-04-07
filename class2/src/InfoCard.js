
function InfoCard({title, description, rating, tags, color, isPremium, imageUrl}){
    const colors = ["red", "blue", "green", "yellow", "pink", "purple"];


    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };



    return <div style={{background: color}} className="InfoCard">
        <img src={imageUrl} className="InfoPhoto"/>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Rating: {rating <= 5 ? "★".repeat(rating) + "☆".repeat(5 - rating) : "You put too high rating"}</p>
        <div className="Tags">{tags.map(tag => <button key={tag} style={{background: getRandomColor(), border: "none", padding: "5px 10px", color: "white"}}>{tag}</button>)}</div>
        <p>{isPremium === true ? "🔥Premium" : "Not premium"}</p>
    </div>
}


export default InfoCard;

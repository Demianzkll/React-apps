import { useState } from "react";

function UserCard(){
const [cards, setCard] = useState([
  { id: 1, name: "John Doe", role: "Frontend Developer", photo: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Sarah Smith", role: "Graphic Designer", photo: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Mike Brown", role: "Backend Engineer", photo: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Emily White", role: "UI/UX Designer", photo: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "David Lee", role: "Full-Stack Developer", photo: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Olivia Green", role: "Product Manager", photo: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "James King", role: "QA Engineer", photo: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Sophia Adams", role: "DevOps Engineer", photo: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Chris Hall", role: "Data Analyst", photo: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Anna Perez", role: "Marketing Specialist", photo: "https://i.pravatar.cc/150?img=10" }
]);


    function mixList(){
        const shuffled = [...cards];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setCard(shuffled);
    }

    return (
        <div className="cards">
            <ul>The first type of list: <br/>{cards.map(card => <li>{card.name}-{card.role} <br/> <img src={card.photo}/></li>)}</ul>
            <ul>The second type of list: <br/>{cards.map(card => <li key={card.id}>{card.name}-{card.role}<br/> <img src={card.photo}/></li>)}</ul>
            <button onClick={mixList}>Mix the list</button>
        </div>       
    )
}


export default UserCard
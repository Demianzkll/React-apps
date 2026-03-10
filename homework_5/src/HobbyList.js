function HobbyList(){
    const hobbies = ['Football', 'Boxing', 'Programming', 'English', 'Swimming'];
    return <ul className="list"><h2>My hobbies</h2>{hobbies.map(hobby => <li className="option">{hobby}</li>)}</ul>
}

export default HobbyList;
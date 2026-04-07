function WelcomeCard ({name, age, isStudent, favoriteSubjects, avatar}){
    return <div className="Card">
        <img className="StudentPhoto" src={avatar}/>
        <h2>{name}-{age}</h2>
        <p>{isStudent === true ? "Student" : "Not student"}</p>
        <ul className="Sublist">{favoriteSubjects.length === 0 ? "There aren't favorite subjects" : favoriteSubjects.map(subject => <li key={subject}>{subject}</li>)}</ul>
    </div>
}

export default WelcomeCard;

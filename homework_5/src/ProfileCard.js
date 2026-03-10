
function ProfileCard(){
    const profiles = [
        {
            userPhoto:'/img/nick.png',
            userName:'Nick',
            userDescription:'Football is my life'
        },
        {
            userPhoto:'/img/john.png',
            userName:'John',
            userDescription:'Love comfortbility'
        },
        {
            userPhoto:'/img/scott.png',
            userName:'Scott',
            userDescription:'Programmer in everything'
        }
    ];

    return <div className="cards">
        {profiles.map(profile =>
        <div className="card">
            <img className="profilesPhoto" src={profile.userPhoto}/>
            <h3>{profile.userName}</h3>
            <p>{profile.userDescription}</p> 
        </div> 
        )}
    </div>
}



export default ProfileCard;
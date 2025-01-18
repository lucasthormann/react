import profilePic from './assets/me.png'

function Card(){
    return(
        <div className="Card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Lucas Thormann</h2>
            <p className="card-text">I study computers and write code</p>
        </div>
    );
}

export default Card
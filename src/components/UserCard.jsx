import "./UserCard.css"

function UserCard({id, user}) {
    {/*  map - método de array para iterar sobre os elementos do array e retornar um novo com os elementos modificados. */}
    return (
        <div className="user-card">
            <img className="user-card-avatar" src={`https://robohash.org/${id}`} alt="avatar-img" />
            <div className="user-card-info">
                <p>ID: {id + 1}</p>
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Idade: {user.age}</p>
            </div>
        </div>  
    )
}

export default UserCard
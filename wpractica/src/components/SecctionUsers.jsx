import users from '../assets/users.json'

export function SectionUsers(){
    return(
        <section>
            <h1> SECCION DE USUARIOS</h1>
           {users.map(user=>(
            <div className='card' key={user.email}>
                <h2>{user.apodo}</h2>
                <h3>MASCOTAS DE USUARIOS</h3>
              <ol>
                {user.mascotas.map(mascota=>(

                <li key={mascota}>
                    {mascota.nombre}
                    <tr> </tr> edad:{mascota.edad}años
                    <tr>color:{mascota.color}</tr></li>
                ))}


              </ol>
    
            </div>


           ))}
        </section>
        
    
    )
}
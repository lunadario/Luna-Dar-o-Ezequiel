import account from '../assets/account.json'

export function SectionAccount(){
    return(
        <section>
            <h1> SECCION CUENTAS</h1>
            {account.map(accoun=>(
                <div className='card' key={accoun.accoun}>
                   <h2>{accoun.userName}</h2>
                   <a href={`https://twitter.com/${accoun.accoun}`}> perfil de twitter</a>
                   
                </div>
            ))}
        </section>
        
    
    )
}
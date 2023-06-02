
import products from '../assets/products.json';
export function SectionProductos(){
    return(
      <section>
    
            <h1> SECCION DE PRODUCTOS</h1>
            {products.map(product=>(
                <div className='card' key={product.id}>
               <h2>{product.nombre}</h2>
               <p>{product.precio}</p>
               <p>{product.descripcion}</p>

               </div>
            ))}
     
      </section>
    )
}
export default SectionProductos
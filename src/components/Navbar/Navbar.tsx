import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

let navbarComponent

{
    navbarComponent = (
    <div className='w-full bg-blue-900 text-slate-200 font-bold flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase'>DaniFarma</Link>

        <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoria</Link>
        </div>
        </div>
    </div>
    )
}

return (
<>
    {navbarComponent}
</>
)
}

export default Navbar;
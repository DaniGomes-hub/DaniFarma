import React from "react";
import { Link  } from "react-router-dom";
import Categoria from "../../../../model/ModelCategoria";

interface CardCategoriasProps{
categoria: Categoria;
}

function CardCategorias({categoria}: CardCategoriasProps) {

    return (

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
    <header className='py-2 px-6 bg-blue-300 text-black font-bold text-2xl'>Categoria</header>
    <h4 className='text-2xl font-semibold uppercase flex justify-center bg-slate-200'>{categoria.nome}</h4>
    <p className='p-4 text-xl bg-blue-300 h-full flex justify-center'>{categoria.descricao}</p>
    
    <div className="flex">

        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-blue-500 hover:bg-blue-800 flex items-center justify-center py-2'>
        <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
        <button>Deletar</button>
        </Link>
        </div>
    </div>
)
}

export default CardCategorias;
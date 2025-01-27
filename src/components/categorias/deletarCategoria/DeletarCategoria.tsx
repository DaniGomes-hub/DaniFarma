import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../service/Service'
import Categoria from '../../../model/ModelCategoria'


function DeletarCategoria() {

const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

const navigate = useNavigate()

const { id } = useParams<{ id: string }>()

async function buscarPorId(id: string) {
    try {
        await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
        alert('Erro na requisição!')
    }
}

useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)
    }
}, [id])

function retornar() {
    navigate("/categorias")
}

async function deletarCategoria() {
    try {
        await deletar(`/categorias/${id}`)

        alert('Categoria apagada com sucesso')

    } catch (error) {
        alert('Erro ao apagar a Categoria')
    }

    retornar()
}

return (
<>
    <div className='container w-1/3 mx-auto'>
        <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

        <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-blue-400 text-black font-bold text-2xl flex justify-center'>Categoria</header>
            <div className='p-4 '>
                <h4 className='text-lg font-semibold uppercase flex justify-center'>{categoria.nome}</h4>
                <p className='flex justify-center'>{categoria.descricao}</p>
        </div>
            <div className="flex">
                <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                <button className='w-full text-slate-100 bg-blue-400 hover:bg-blue-900 flex items-center justify-center' onClick={deletarCategoria}>
                    Sim
                </button>
            </div>
        </div>
    </div>
</>
)
}

export default DeletarCategoria;
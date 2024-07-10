import React, {useEffect, useState} from "react";
import { ThreeCircles } from "react-loader-spinner";
import { buscar } from "../../../service/Service";
import CardCategorias from "../cardCategorias/cardCategorias/CardCategorias";
import Categoria from "../../../model/ModelCategoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            if (error.toString().includes('400')) {
                alert('Erro na requisição, tente novamente')
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.length === 0 && (
                        <ThreeCircles
                            visible={true}
                            height="200"
                            width="200"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper mx-auto"
                        />
                    )}
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategorias key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
    );
}

export default ListaCategorias;
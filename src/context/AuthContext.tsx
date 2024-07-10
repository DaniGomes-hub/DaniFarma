import { createContext, ReactNode, useState } from "react"
import { login } from "../service/Service"
import Home from '../pagina/Home';

interface AuthContextProps {
    home:Home
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [categorias, setCategorias] = useState<Categoria>({
        id: 0,
        nome: "",
        descricao: ""
    })

    return (
        <AuthContext.Provider value={{ categoria }}>
            {children}
        </AuthContext.Provider>
    )
}
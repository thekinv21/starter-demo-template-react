import { ReactNode } from 'react'

interface IBaseProvider {
	children: ReactNode
}

export function BaseProvider({ children }: IBaseProvider) {
	return <main>{children}</main>
}

import { ReactNode } from 'react'

export interface InputRootModel {
    children: ReactNode
}

export interface InputIconModel {
    children: ReactNode
}

export interface InputModel extends React.HTMLAttributes<HTMLInputElement> {}

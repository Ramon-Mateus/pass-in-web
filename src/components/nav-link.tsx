import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {} // Pega todas as propriedadas que seria de um componente 'a' do html e coloca em props

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className='font-medium text-sm'> {/* // o {...props} pega todas as propriedades passadas para o componente e coloca automaticamente */}
            {props.children}
        </a>
    )
}
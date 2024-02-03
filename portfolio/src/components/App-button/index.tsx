import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface IAppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary'
}

const AppButton: React.FunctionComponent<IAppButtonProps> = (props) => {
    const { children, className, variant } = props
    return (
        <button
            {...props}
            className={twMerge(
                variant === 'primary'
                    ? 'bg-main-tg text-white'
                    : 'text-main-tg bg-white',
                'px-5 py-2 hover:opacity-90 font-semibold',
                className
            )}
        >
            {children}
        </button>
    )
}

export default AppButton

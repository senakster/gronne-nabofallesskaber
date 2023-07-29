import { PropsWithChildren } from "react"

const ContainerInner = ({cols, children}: PropsWithChildren & {cols?: string}) => {
    return (
        <div className={`${cols || 'col-[1_/_-1]'}`}>
            {children}
        </div>
    )
}

export default ContainerInner
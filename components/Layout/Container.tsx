import { PropsWithChildren } from "react"
import ContainerInner from "./ContainerInner"

const Container = ({ cols, children, maxWidth}: PropsWithChildren & {cols?: string, maxWidth?: string}) => {
    return (
        <div className={`${maxWidth || 'max-w-4xl'} p-4 md:mx-16 mx-auto ${cols ? 'grid grid-cols-12' : ''}`}>
            {cols ?
                <ContainerInner {...{cols}} >
                    {children}
                </ContainerInner>
            : <>{children}</>
            }
                
        </div>
    )
}

export default Container
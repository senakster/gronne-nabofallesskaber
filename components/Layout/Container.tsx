import { PropsWithChildren } from "react"
import ContainerInner from "./ContainerInner"

const Container = ({ cols, children, maxWidth}: PropsWithChildren & {cols?: string, maxWidth?: string}) => {
    return (
        <div className={`${maxWidth || 'max-w-[1440px]'} mx-auto ${cols ? 'grid grid-cols-12' : ''}`}>
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
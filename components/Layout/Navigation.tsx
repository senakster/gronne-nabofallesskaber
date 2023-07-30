import Container from "./Container"
import Link from "next/link"
const Navigation = () => {
    return (
        <Container>
        <div>
            <nav className="flex gap-2">
                <Link href="/">Frontpage</Link>
                <Link href="/studio">Studio</Link>
                
            </nav>
        </div>
        </Container>

    )
}

export default Navigation
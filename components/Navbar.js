
import Link from "next/link"

export default function Navbar() {

    return (
        <div>
            <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                <Link href="/" className="w3-bar-item w3-button" style={{width:'25%'}}>HOME</Link>
                <Link href="/login" className="w3-bar-item w3-button" style={{width:'25%'}}>LOGIN</Link>
                <Link href="/songs" className="w3-bar-item w3-button" style={{width:'25%'}}>SONGS</Link>
                <Link href="/singers" className="w3-bar-item w3-button" style={{width:'25%'}}>SINGERS</Link>
            </div>
        </div>
    )
}

import "../styles/w3.css"
import "../styles/railway.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="w3-content w3-light-grey" style={{maxWidth:'1400px'}}>
        <Component  {...pageProps} />
    </div>
  )
}

export default MyApp

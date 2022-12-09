
import "../styles/w3.css"
import "../styles/railway.css"
import "../styles/globals.css"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <div className="w3-content w3-light-grey" style={{ maxWidth: '1400px' }}>
      <>
        <Header />
        <Component  {...pageProps} />
      </>
    </div>
  )
}

export default MyApp

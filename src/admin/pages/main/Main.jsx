import Dashbord from './dashboard/Dashbord'
import './main.css'
import PageTilte from './pageTitle/PageTilte'
const Main = () => {
    return (
        <main id='main' className='main'>
            <PageTilte page ="Dashboard" />
            <Dashbord />
        </main>
    )
}

export default Main
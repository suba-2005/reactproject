import Card from './Card'
import Header from "../components/Header";
import Footer from '../components/Footer';
function Tours({tours, removeTour}) {
    return <>
        <Header />
        <div className='container'>
            <div>
                
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
        <Footer />
    </>
}


export default Tours;
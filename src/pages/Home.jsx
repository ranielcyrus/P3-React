import { ItemContext } from "../components/ItemContext"
import {useNavigate} from 'react-router-dom'
import { useContext } from "react"
import './Home.css'
import Nav from '../components/Navbar.jsx'

const Home = () => {

    const navigate = useNavigate();

    const { data } = useContext(ItemContext);

    const nav = (navParam) => {
        navigate(`/product-detail/${navParam}`)
    }

    return (
        <>
            <Nav />
            <h1>All Products</h1>
            <div id="product-display">
            {
                data.map((e) => (
                    <div id='item' key={e.id}>
                        <img 
                            src={e.image} 
                            alt="image" 
                            id="item-img" 
                            onClick={()=> nav(e.name.replace(/\s+/g, '-').toLowerCase())}
                        />
                        <h2 onClick={()=> nav(e.name.replace(/\s+/g, '-').toLowerCase())}>{e.name}</h2>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Home
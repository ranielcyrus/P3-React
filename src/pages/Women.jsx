import { ItemContext } from "../components/ItemContext";
import Nav from '../components/Navbar.jsx'
import {useNavigate} from 'react-router-dom'
import { useContext, useState, useEffect } from "react";

const Men = () => {

    const navigate = useNavigate();

    const { data } = useContext(ItemContext);

    const [filterdata , setFilterData] = useState([]);

    useEffect(() =>{
        const filtered = data.filter(e => e.category==='women')
        setFilterData(filtered)
      }, [data]);

    const nav = (navParam) => {
        navigate(`/product-detail/${navParam}`)
    }

    return (
        <>
            <Nav />
            <h1>Women</h1>
            {
                <div id="product-display">
                {
                    filterdata.map((e) => (
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
            }
        </>
    )
}

export default Men;
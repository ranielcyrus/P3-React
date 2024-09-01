import { ItemContext } from "../components/ItemContext";
import Nav from '../components/Navbar.jsx'
import { useContext, useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';


const Men = () => {

    const { category } = useParams(); //get the params

    const navigate = useNavigate();

    const { data } = useContext(ItemContext);

    const [filterdata , setFilterData] = useState([]);

    useEffect(() =>{
        const filtered = data.filter(e => e.category=== category)
        setFilterData(filtered)
      }, [data, category]);

    const nav = (navParam) => {
        navigate(`/product-detail/${navParam}`)
    }

    return (
        <>
            <Nav />

            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
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
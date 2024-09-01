import {useParams, useNavigate} from 'react-router-dom';
import { ItemContext } from './ItemContext';
import Model from './Model.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar.jsx';
import './ProductDetail.css'

export const ProductDetail = () => {
    const navigate = useNavigate();
    const { data, addToCart } = useContext(ItemContext);
    const [filterdata , setFilterData] = useState([]);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(7);
    const [totalPrice , setTotalPrice] = useState(0);
    const {name} = useParams(); //get the params

    useEffect(() =>{
        const filtered = data.find(e => e.name === name.replace('-', ' '))
        setFilterData(filtered)
      }, [data]);

    useEffect(()=> {
        setTotalPrice(filterdata.price*qty);
    })

    const handleGoBack = () => {
        navigate(-1) //go back to previous page
    }
    
    const handleIncrementQTY = () => {
        setQty(qty+1)
    }

    const handleDecrementQTY = () => {
        if(qty ===1) {
            alert('Minimum quantity is 1!')
        } else {
        setQty(qty-1)
        }
    }

    const handleSize = (e) => {
        setSize(e.target.value);
        console.log(size)
    }

    const handleAddtoCart = () => {
        addToCart(filterdata, qty, size);
        alert('Item added to cart!');
    }

    return (
        <>
            <Navbar />

            <section className='product-detail'>
                <div className='item-summary'>
                    <div className='item-background'>
                        <h2 className='item-details-text'>Item Details</h2>
                        <div className='item-details'>
                            <p className='details'>Item Name: {filterdata.name}</p>
                            <p className='details'>Item Price: {`$${filterdata.price}`}</p>
                            <p className='details'>Category: {filterdata.category}</p>
                            <label className='details'>Size: 
                            <select className='details' onChange={handleSize} value={size}>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                            </label>
                            <label className='details' id='qty-form'>Quantity: 
                                <p className='increment-decrement' onClick={handleDecrementQTY}>-</p>
                                <p>{qty}</p>
                                <p className='increment-decrement' onClick={handleIncrementQTY}>+</p>
                            </label>
                            <p className='details'>{`Total Price: $${totalPrice}`}</p>
                            <div className='product-buttons'>
                                <button onClick={handleGoBack}>Go Back</button>
                                <button onClick={handleAddtoCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shadow-canvas'>
                    <Canvas camera={{fov: filterdata.fov, near: 0.1, far: 1000, position: [5, 1, filterdata.pos]}} >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} /> 

                        {/* Render models with different URLs and positions */}
                        <Model url={filterdata.url} position={[0, 0, 0]} scale={[1, 1, 1]}  />
                        <OrbitControls />
                    </Canvas>
                </div>
            </section> 
        </>
    )
}
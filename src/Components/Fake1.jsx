import React,{useState,useEffect} from "react"; 
import Counter from "./Counter";

export default function Fake1() {
    const [api, setApi] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(val => setApi(val))
            .catch(err => console.error(err));
    }, []);

    const filteredProducts = api.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleImageClick = (p) => {
        setProduct(p);
    }
    const handleBackClick = () => {
        setProduct(null); 
    };

    return (
        <>
        <div className="inDiv">
            <input 
                type="text"
                placeholder=" search "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="images">
            <div className="inImages">
            {product ? (
                    // If an image is clicked, show only that image
                    <div className="innerDiv" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <br />
                        <Counter></Counter>
                        <button onClick={handleBackClick}>Back</button>
                        
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <div className="innerDiv" key={product.id} onClick={() => handleImageClick(product)}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                            <br />
                            <button>Add to cart</button>
                        </div>
                    ))
                )}
             </div>
        </div>  
        </>
    );
}

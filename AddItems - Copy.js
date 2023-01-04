import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [count, setCount] = useState(0);

    const addItemButtonPressed = () => {
        //console.log(name, price, type, brand);
        props.AddItem({ name: name, price: price, type: type, brand: brand, count: count, });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
        setCount(0);
    }
    return (
        <div className="container">
            <h2>Add Items</h2>
            <form>
                <div className="row">
                    <div className="row">
                        <label htmlFor="name-field">Name: </label>
                        <input id="name-field" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="row">
                        <label htmlFor="price-field">Max Price: </label>
                        <input id="price-field" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="row">
                        <label htmlFor="type-field">Type: </label>
                        <input id="type-field" type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div className="row">
                        <label htmlFor="brand-field">Brand: </label>
                        <input id="brand-field" type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>
                    <div className="row">
                        <label htmlFor="brand-count">Count: </label>
                        <input id="brand-count" type="text" placeholder="Count" value={count} onChange={(e) => setCount(e.target.value)} />
                    </div>
                    <div className="row mt-3">
                        <button type="button" className="btn btn-primary" onClick={addItemButtonPressed}> Add Item</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddItem;
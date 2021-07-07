import React, {useState} from 'react'

const ProdArray = ({data}) => {
    const {toyImg,toyName,toyDescription,actualPrice,offerPrice} = data
    const [img, setImg] = useState(``)
    import (`img/${toyImg}`).then((image) => setImg(image.default))
    return (
        <article className="toy">
            <header>
                <div className="thumbnail">
                    <a href="#"><img src={img} alt={`{toyImg}`}/></a>
                </div>
                <h1>{toyName}</h1>
                <h2>Description:</h2> 
                <p>{toyDescription}</p>
                <data value="39"><del>${actualPrice}</del> <ins>${offerPrice}</ins></data>
            </header>
            <footer>
                <button type="button" class="wishlist"><span class="material-icons" aria-label="Favourites"></span>wishlist</button>
                <button type="button" class="your-cart"><span class="material-icons" aria-label="Add to bag"></span>your-cart</button>
            </footer>   
        </article>
    )
}

export default ProdArray
import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
return (
    <div className="oneBook">
        <img src={props.myimage} alt="" />
        <h2 className = "mainHeading">{props.mytitle}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, corporis. Et dolorem nemo harum 
        repellendus unde debitis corrupti eos inventore! 
        Inventore dolor ipsum consectetur repudiandae similique. Facere quasi aspernatur similique!</p>
         <OrderButton></OrderButton>
     </div>   )
}

export default Book
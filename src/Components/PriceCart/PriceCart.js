import Card from "../Card/Card";
import "./PriceCart.css"

function PriceCart(props){
  //console.log(props);
    return(
       <div className="pricecart">
       {props.data.map((item,index)=>{
      return <Card key={index} data={item}/>
         })}
       </div>
    );
}

export default PriceCart;
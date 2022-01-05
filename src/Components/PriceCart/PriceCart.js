import Card from "../Card/Card";
import "./PriceCart.css"

function PriceCart(props){
  //console.log(props);
    return(
     <div>
       <h1>Pricing Table</h1>
       <div className="pricecart">
       {props.data.map((item,index)=>{
      return <Card key={index} data={item}/>
         })}
       </div>
     </div>
     
    );
}

export default PriceCart;
import './Card.css'

function Card(props){
    //console.log(props);
    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="text-uppercase text-center">{props.data.pricetype}</div>
                <div className="text-center"><span className="larger">{props.data.price}</span><small>/month</small></div>
                <hr></hr>
                    <ul type="none">
                        {props.data.includeslist.map((item,index)=>{
                            return <li key={index}><i className="fa fa-check fa-1x"></i>{item}</li>
                        })}
                    </ul>
                    <ul type="none" className="exclude">
                        {props.data.excludelist.map((item,index)=>{
                            return <li key={index}><i className="fa fa-times fa-1x"></i>{item}</li>
                        })}
                    </ul>
                <div>
                 <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
       </div>
    );
}

export default Card;
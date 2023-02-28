const Card = (props) => {
    return (
        <div style={{width:'160px', height:'220px', backgroundColor:'lightgray', borderRadius:'10px', margin:'30px 40px', display:"flex", flexDirection:'column', alignItems:'center'}}>
            <div className="imagem" style={{width:'130px', height:'150px'}}>
                <img src={props.img} alt={props.title} style={{width:'130px', maxHeight:'130px', margin:'10px 0px 0px', borderRadius:'5px'}} />
            </div>
            <div className="texto" style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
                <h3 style={{margin:'5px 0'}}>{props.title}</h3>
                <p style={{margin:'5px 0 '}}>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
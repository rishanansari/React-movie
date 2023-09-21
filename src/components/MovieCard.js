import React from 'react';
const MovieCard=(props)=>{
     
return(
<div class="row row-cols-1 row-cols-md-3 g-4 ">
        {props.returnCards().map((card,i)=>(
            <>
            <div class="col">
             <div class="card">
                <img className='card-img-top' src={card.posterUrl} alt="product"/>
            {/* // Card Body  */}
            <div className='card-body p-4'>
                <h3 className='fw-bolder'>{card.title}</h3>
                <h3 className='fw-bolder'>{card.year}</h3>
            </div>
            </div>
            </div>
            </>
        ))}   
    </div>

)
}

export default MovieCard;
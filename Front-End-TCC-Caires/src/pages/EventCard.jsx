import style from './Moracard.module.css';

const EventCard = ({ titulo_evento, CPF, Data }) => {
  return(
        

    <div className="dive-label">
      <div className="div-label">
    
      
          <div  className="text-container">
            <span className="text-fields">{titulo_evento}</span>
          </div>

      </div>
      <div className="div1-label">
   
  
          <div  className="text-container">
            <span className="text-fields">{CPF}</span>
          </div>

      </div>
      <div className="div2-label">
        
 
          <div  className="text-container">
            <text className="text-fields">{Data}</text>
          </div>

      </div>
    </div>


)
};

export default EventCard;
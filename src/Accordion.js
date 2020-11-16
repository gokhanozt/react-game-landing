import React, {useState} from 'react';
import { useFetch } from "./hook";

const Accordion = ({ title, children,content }) => {
    const [isOpen, setOpen] = React.useState(false);
    const [active] = useState(0);
    const [accItems] = useFetch(
        "https://raw.githubusercontent.com/gokhanozt/react-game-landing/master/characters.json"
      );
      
    return (
      <div className="accordion-wrapper">
        {accItems.map(({ id, title,content }) =><AccItemComponent
           key={title}
           title={title}
           children={children}
           content={content}
           isActive={active === id}
         />
      )}
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };


  const AccItemComponent = ({
    children ='',
    title = '',
    content = '',
    onItemClicked = () => console.error('You passed no action to the component'),
    isActive = false,
  }) => {
    const [isOpen, setOpen] = React.useState(false);
    
    return (
 
      <div>
          <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>

        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    )
  };

  export default Accordion;
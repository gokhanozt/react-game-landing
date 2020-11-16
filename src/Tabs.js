import React, {useState} from 'react';
import { useFetch } from "./hook";



const TabsComponent = () => {
 const [active, setActive] = useState(0);
 const [tabItems] = useFetch(
  "https://raw.githubusercontent.com/gokhanozt/react-game-landing/master/game.json"
);
  
  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, title }) =><TabItemComponent
           key={title}
           title={title}
           onItemClicked={() => setActive(id)}
           isActive={active === id}
         />
      )}
      </div>
      <div className="content">
        {tabItems.map(({ id, content,title,url }) => {
           if(active=== id){
            return (
              <div key={title}>
                <h3>{content}</h3>
                <img alt={title} src={url} />
              </div>
            )
          }
          else{
            return ''
          }
        })}

      </div>
     </div>
  )
}

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
      <p className="tabitem__title">{title}</p>
    </div>
  )
};
export default TabsComponent;

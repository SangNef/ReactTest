import React from 'react';
import { Data } from '../../Data';
import FacebookComponents from './facebookComponents';

const FacebookList = (props) => {
    return (
      <div className="facebook">
        <h1 className="title">facebook</h1>
        <div className="feature">
        {props.children}
          {Data.map((item, index) => {
            //  let newClass =""
            //  if (index === 1) newClass = "testClass";
            const newClass = index === 1 ? "testClass" : "";
            return (
              <FacebookComponents
                key={item.id}
                images={item.images}
                name={item.name}
                contact={item.contact}
                className={newClass}
              ></FacebookComponents>
            );
          })}
        </div>
      </div>
    );
};

export default FacebookList;
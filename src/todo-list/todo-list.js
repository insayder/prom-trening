import React from 'react';
import './todo-list.css';
const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li className="list list-group-item" key={index}>{item}</li>)
    }
  </ul>
);

export default List;
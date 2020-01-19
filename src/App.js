import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/animals/1',
    'name': '홍길동',
    'birthday':'921111',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/animals/2',
    'name': '한예슬',
    'birthday':'921212',
    'gender':'여자',
    'job':'배우'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/animals/3',
    'name': '박나래',
    'birthday':'921214',
    'gender':'여자',
    'job':'개그우먼'
  }
]

class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;

import React, { useEffect, useState } from 'react';
import db from '../../assets/data/db.json'
import Header from '../components/UI/Header/Header';
import Search from '../components/UI/Search/Search';
import Store from '../components/Store/Store';

const Gallery = () => {

    const [goods, setGoods] = useState([])
    const [filter, setFilter] = useState('')

    
  useEffect(() => {


    setGoods(db)

    

  }, [])

    return (
        <div className="App">
            <Header />
          <Search filter={filter} setFilter={setFilter} />
        
          <Store goods={goods} />
        </div>
    );
};

export default Gallery;
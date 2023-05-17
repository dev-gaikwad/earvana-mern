import React from 'react';
import '../../css/OptionsTab.css';

const OptionsTab = () => {
  return (
    <div className='options-tab-container'>
      <div className='tab-content'>
        <div className='option-container'>
          <h3>Search</h3>
          <div className='options-list'>
            <div className='option'>
              <input
                className='search-input'
                name='search'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
        <div className='option-container'>
          <h3>Filter By</h3>
          <div className='options-list'>
            <div className='option'>
              <label htmlFor='priceRange'>Price</label>
              <input
                className='price-range-input'
                type='range'
                id='priceRange'
                min={0}
                max={100000}
                step={10000}
              />
            </div>
            <div className='option'>
              <label>Category</label>

              <label htmlFor='in-ear'>
                <input type='checkbox' id='in-ear' />
                In-Ear
              </label>
              <label htmlFor='over-ear'>
                <input type='checkbox' id='over-ear' />
                Over-Ear
              </label>
              <label htmlFor='wired'>
                <input type='checkbox' id='wired' />
                Wired
              </label>
              <label htmlFor='wireless'>
                <input type='checkbox' id='wireless' />
                Wireless
              </label>
              <label htmlFor='tools'>
                <input type='checkbox' id='tools' />
                Tools
              </label>
              <label htmlFor='cables'>
                <input type='checkbox' id='cables' />
                Cables
              </label>
            </div>
            <div className='option'>
              <label htmlFor='ratings'>Ratings</label>
              <input id='ratings' name='ratings' type='range' min={1} max={5} />
            </div>
          </div>
        </div>
        <div className='option-container'>
          <h3>Sort By</h3>
          <div className='options-list'>
            <div className='option'>
              <label htmlFor='H2L'>
                <input type='radio' id='H2L' name='sortByPrice' value='H2L' />
                Price High to Low
              </label>
              <label htmlFor='L2H'>
                <input type='radio' id='L2H' name='sortByPrice' value='L2H' />
                Price Low to High
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='tab-buttons'>
        <button className='btn-secondary'>Clear All</button>
      </div>
    </div>
  );
};

export default OptionsTab;

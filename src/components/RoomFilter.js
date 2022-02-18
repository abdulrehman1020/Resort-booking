import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (item, value) => {
  return [...new Set(item.map(item => item[value]))]
}
console.log(getUnique);

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <>
      <section className='filter-container'>
        <Title title="Search Room" />
        <form className='filter-form'>
          <div className='form-group'>
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="capacity">Capacity</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="price">Room Prize ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control" />

          </div>
          <div className='form-group'>
            <label htmlFor='size'>Room Size</label>
            <div className='size-inputs'>
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input" />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input" />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
        </form>

      </section>
    </>

  );
}
export default RoomFilter;
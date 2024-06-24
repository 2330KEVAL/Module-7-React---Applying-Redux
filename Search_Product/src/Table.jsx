
import React, { useState } from 'react';

const Table = () => {
  const initialData = [
    { id: 1, name: 'Boat', price: 250, category: 'watch' },
    { id: 2, name: 'Thar', price: 1500000, category: 'Car' },
    { id: 3, name: 'Hp', price: 25000, category: 'Laptop' },
    { id: 4, name: 'Acer', price: 23000, category: 'Laptop' },
    { id: 5, name: 'Dell', price: 30000, category: 'Laptop' },
    
    // Add more data as needed
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>   
     <h1 style={{marginLeft:350}}>Serch Product</h1>
    <div style={{marginLeft:350}} className='mt-5' >
    <div className='container mt-5'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>&nbsp;
            <th>Name</th>&nbsp;
            <th>Price</th>&nbsp;
            <th>Category</th>&nbsp;
            <th>Action</th>&nbsp;
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>&nbsp;&nbsp;&nbsp;
              <td>{item.name}</td>&nbsp;&nbsp;&nbsp;
              <td>{item.price}</td>&nbsp;&nbsp;&nbsp;
              <td>{item.category}</td>&nbsp;
              <td><button className='btn btn-danger'>Delet</button></td>
              <td><button className='btn btn-primary'>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>

  );
};

export default Table;

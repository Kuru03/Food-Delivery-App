import React, { useEffect, useState } from 'react'

import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }


  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId
    })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6D6D6D] text-[16px]'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] px-[15px] py-[12px] border-[1px] border-[solid] [@media(max-width:600px)]:grid-cols-[1fr_3fr_1fr] [@media(max-width:600px)]:gap-[15px] border-[#cacaca] [@media(max-width:600px)]:hidden text-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] px-[15px] py-[12px] border-[1px] border-[solid] border-[#cacaca] text-[13px] [@media(max-width:600px)]:grid-cols-[1fr_3fr_1fr] [@media(max-width:600px)]:gap-[15px]'>
              <img className='w-[50px]' src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List

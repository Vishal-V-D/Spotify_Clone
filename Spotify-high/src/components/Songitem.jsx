import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContextProvider';

const Songitem = ({ name, image, desc, id }) => {
  const { playwithid } = useContext(PlayerContext); // Correctly destructure context value

  return (
    <div onClick={() => playwithid(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default Songitem;

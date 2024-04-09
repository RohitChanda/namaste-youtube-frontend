import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchVideosByKeyWord, updateSearchKey } from '../store/slice/videoListSlice'

const Button = ({name, onClick}) => (
  <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'onClick={onClick}>{name}</button>
)

const ButtonList = () => {
  const dispatch = useDispatch();

  const handlefetchVideos = async (searchKey) => {
    dispatch(
      updateSearchKey({
        searchKey: searchKey,
      })
    );
    dispatch(fetchVideosByKeyWord(searchKey));
  }
  
  const btnList = ['All', 'Bike', 'Music', 'JavaScript', 'Blues', 'Football','FIFA', 'Cricket', 'Guitar',
  //  'Gym', 'Drums', 'Barcelona', 'PUBG', 'Laptop', 'Messi', 'Barcelona', 'PUBG', 'Laptop', 'Messi'

]
  return (
    <div
     className='flex'
     >
      {btnList.map((name, index) => (
        <Button
          key={index}
          name={name}
          onClick={() => handlefetchVideos(name)}
        />

      ))}
    </div>
  )
}

export default ButtonList
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import{useSelector,useDispatch}  from "react-redux"
import { getMeditationById } from '../redux/reducers/meditateReducer'
import MyHeadspaceNav from './myHeadspace/MyHeadspaceNav'
import { configureStore } from '@reduxjs/toolkit'

const MeditateMusicCards = () => {
    const { id } = useParams(); 

    const dispatch= useDispatch();
    const meditateCard = useSelector(state=>state.meditate.cardById);
    console.log(meditateCard)

    useEffect(() => {
        dispatch(getMeditationById(parseInt(id)));
        
    }, [dispatch, id]);
  return (
    <>
        <MyHeadspaceNav/>
        <div className='flex items-center'>
            <div className='flex flex-col'>
                <h2>{meditateCard.heading}</h2>
            </div>
        </div>
    </>
  )
}

export default MeditateMusicCards
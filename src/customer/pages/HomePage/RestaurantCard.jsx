import React from 'react';
import { Card, IconButton } from '@mui/material'
//import { Navigate, useNavigate } from 'react-router-dom';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RestaurantCard = ({item}) =>{
    //const navigate=useNavigate();
    //onClick={Navigate(`/restaurant/${item.city}/${item.name}/${item.id}`)}
    return (
        <Card className='m-5 w-[18rem] productCard'>
            <div >
                <img className="w-full h-[10rem] rounded-t-md objectcover" 
                src={item.imageUrl} alt=""/>
            </div>

            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>{item.name}</p>
                    <p className="text-gray-500 text-sm">
                        {item.description.substring.length>40
                        ? item.description.substring(4.40) + "..."
                        : item.description
                        }
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon color="primary"/>:<AccessibilityNewIcon/>}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}

export default RestaurantCard;
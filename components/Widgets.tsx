import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='mt-2 px-2 col-span-2'>
            <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
                <SearchIcon className='h-5 w-5 cursor-pointer text-gray-400' />
                <input type="text" className=' rounded-full outline-none w-full p-5 bg-transparent' placeholder='Search Sayyit' />
            </div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Chirags30477072"
                options={{ height: 400 }}
            />
        </div>
    )
}

export default Widgets
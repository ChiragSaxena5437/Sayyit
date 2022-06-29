import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,

} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>

            <img className="Left__Image m-3" src="/Sayyitbg.png" />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={UserIcon} title="Sign IN" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />



        </div>

    )
}

export default Sidebar
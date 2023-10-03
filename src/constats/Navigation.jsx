import {
    HiOutlineHome,
    HiOutlineUsers,
    HiOutlineCog,
    HiQuestionMarkCircle
} from 'react-icons/hi'
import { AiOutlineApartment } from "react-icons/ai"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { RiEmotionHappyLine } from "react-icons/ri"
import { BiSolidContact } from "react-icons/bi"


export const DashboardTop = [
    {
        key: 'Home',
        label: 'Home',
        path: '/',
        icon: <HiOutlineHome />
    },
    {
        key: 'About',
        label: 'About',
        path: '/about',
        icon: <HiQuestionMarkCircle />
    },
    {
        key: 'Service',
        label: 'Service',
        path: '/Service',
        icon: <MdOutlineHomeRepairService />
    },
    {
        key: 'Team',
        label: 'Team',
        path: '/Team',
        icon: <HiOutlineUsers />
    },
    {
        key: 'Partner',
        label: 'Partner',
        path: '/Partner',
        icon: <AiOutlineApartment />
    },
    {
        key: 'HappyClients',
        label: 'Happy Clients',
        path: '/HappyClients',
        icon: <RiEmotionHappyLine />
    },
    {
        key: 'Contact',
        label: 'Contact',
        path: '/Contact',
        icon: <BiSolidContact />
    }
]

export const DashboardBottom = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
]
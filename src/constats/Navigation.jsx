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
        path: '/service',
        icon: <MdOutlineHomeRepairService />
    },
    {
        key: 'Team',
        label: 'Team',
        path: '/team',
        icon: <HiOutlineUsers />
    },
    {
        key: 'Partner',
        label: 'Partner',
        path: '/partner',
        icon: <AiOutlineApartment />
    },
    {
        key: 'HappyClients',
        label: 'Happy Clients',
        path: '/happyClients',
        icon: <RiEmotionHappyLine />
    },
    {
        key: 'Contact',
        label: 'Contact',
        path: '/contact',
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
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react'

export const Sidebardata = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title:"Profile",
        icon: <AccountCircleIcon />,
        link: "/profile",
    },
    {
        title:"Fee",
        icon: <PaymentIcon />,
        link: "/fee",
    },
    {
        title:"Classroom",
        icon: <SchoolIcon />,
        link: "/classroom",
    },
    {
        title:"Tests",
        icon: <QuizIcon />,
        link: "/tests",
    },
    {
        title:"Circulars",
        icon: <CalendarMonthIcon />,
        link: "/circular",
    },
    {
        title:"Attendance",
        icon: <BookmarkIcon />,
        link: "/attendance",
    }
]

import { IconProfile, IconEdit, IconPassword, IconProduct, IconExit, IconJam } from "../../assets";
import React, { Component } from 'react'


export const dummyMenu = [
    {
        id:1,
        nama: 'Edit Profile',
        gambar: <IconEdit/>,
        halaman: 'EditProfile'
    },
    {
        id:2,
        nama: 'Change Password',
        gambar: <IconPassword/>,
        halaman: 'ChangePassword'
    },
    {
        id:3,
        nama: 'History Pemesanan',
        gambar: <IconJam/>,
        halaman: 'History'
    },
    {
        id:4,
        nama: 'Sign Out',
        gambar: <IconExit/>,
        halaman: 'Login'
    },

]
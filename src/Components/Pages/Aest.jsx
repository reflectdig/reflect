import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/aestbanner.png"
import { categoryDataAest } from "../../constant/dummyData"

export default function Aset() {
  return (
    <Courses image={image} categoryData={categoryDataAest} />
  )
}

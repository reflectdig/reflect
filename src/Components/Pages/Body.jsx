import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/bodybanner.webp"
import { categoryDataBody } from "../../constant/dummyData"

export default function Body() {
  return (
    <Courses image={image} categoryData={categoryDataBody} />
  )
}

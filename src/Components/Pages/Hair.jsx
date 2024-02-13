import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/hairbanner.png"
import { categoryDataHair } from "../../constant/dummyData"

export default function Hair() {
  return (
    <Courses image={image} categoryData={categoryDataHair} />
  )
}

import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/nailbanner.png"
import {categoryDataNail} from "../../constant/dummyData"

export default function Nail() {
  return (
    <Courses image={image} categoryData={categoryDataNail} />
  )
}

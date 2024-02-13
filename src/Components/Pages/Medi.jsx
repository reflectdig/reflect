import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/medbanner.png"
import {categoryDataMedi} from "../../constant/dummyData"

export default function Nail() {
  return (
    <Courses image={image} categoryData={categoryDataMedi} />
  )
}

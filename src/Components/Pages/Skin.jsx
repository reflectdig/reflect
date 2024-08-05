import React from 'react'
import Courses from './Courses'
import image from "../../assets/images/banner/skinbanner.webp"
import {categoryData} from "../../constant/dummyData"

export default function Skin() {
  return (
    <>
      <Courses image={image} categoryData={categoryData} />
    </>
  )
}

import styled from 'styled-components'

export const ItemDetails = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const CourseItem = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  width: 90%;
  margin: auto;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const CourseImage = styled.img`
  height: 100%;
`

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const CourseItemName = styled.h1`
  font-size: 34px;
  font-weight: 600;
  margin: 0px;
`

export const CourseDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
`

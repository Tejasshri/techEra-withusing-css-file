// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const CourseHeading = styled.h1`
  font-weight: 700;
  font-size: 40px;
  padding: 10px 40px;
`

export const CourseListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 40px;
`

export const CourseItem = styled.li`
  width: 16%;
  margin: 10px;
  flex-grow: 1;
`

export const CourseImage = styled.img`
  height: 70px;
  width: 80px;
`

export const CourseName = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-left: 10px;
`

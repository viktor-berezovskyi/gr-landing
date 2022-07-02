import React from 'react';
import { SmallCourse } from './components/small-course/SmallCourse';
import { MyStory } from './components/my-story/MyStory';
import { Courses } from './components/courses/Courses';
import { EBook } from './components/e-books/EBook';
import { Recipes } from './components/recipes/Recipes';
import styled from 'styled-components';
import { ContainerMain } from '../../../../components/Container';

const Container = styled(ContainerMain)`
  display: grid;
  grid-gap: 30px;
  margin-top: 20px;
`;

export const Main = () => {
  return (
    <Container>
      <SmallCourse />
      <MyStory />
      <Recipes />
      <EBook />
      <Courses />
    </Container>
  );
};

import { PageHeader } from 'antd';
import styled from 'styled-components';
import { gql, useLazyQuery } from '@apollo/client';
import List from './../components/list';
import { get } from 'lodash';
import { useEffect } from 'react';

const ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      body
      authorId
    }
  }
`;

export default function Home() {
  const [getAllPosts, { data }] = useLazyQuery(ALL_POSTS);

  useEffect(() => {
    getAllPosts();
  }, [process.browser]);

  const items = get(data, 'allPosts') || [];

  return (
    <>
      <PageHeader title="All Posts" subTitle="user submitted posts" ghost={false} />

      <Container>
        <List items={items}></List>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 10px;
  padding: 30px;
`;

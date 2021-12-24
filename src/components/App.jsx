import { useState } from 'react';
import { Layout } from './../common/Layout';
import { PAGE } from '../constants/constants';
import { Quiz } from './Quiz';
import { Review } from './Review';
import { Result } from './Result';

export const App = (props) => {
  const [page, setPage] = useState(PAGE.QUIZ);

  const handleClickPage = (id) => {
    setPage(id);
  }

  return (
    <Layout handleClickPage={(id) => handleClickPage(id)}>
      {page === PAGE.QUIZ && <Quiz/>}
      {page === PAGE.REVIEW && <Review/>}
      {page === PAGE.RESULT && <Result/>}
    </Layout>
  );
}
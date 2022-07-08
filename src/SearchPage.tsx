/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions } from './QuestionsData';
import React, { useEffect, useState } from 'react';
import { Page } from './Page';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  searchingQuestionsAction,
  searchedQuestionsAction,
} from './Store';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('criteria') || '';
  const dispatch = useDispatch();
  const questions = useSelector((state: AppState) => state.questions.searched);

  useEffect(() => {
    dispatch(searchingQuestionsAction());
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      dispatch(searchedQuestionsAction(foundResults));
    };
    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};

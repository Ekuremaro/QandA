/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  //   useEffect(() => {
  //     const DoStuff = async () => {
  //       const yy =  stuff();
  //       console.log(yy);
  //     };
  //     DoStuff();
  //   }, []);

  const handleAskQuestionClick = () => {
    navigate('ask');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
          onClick={handleAskQuestionClick}
        >
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList
          data={questions}
          //   renderItem={(question) => (
          //     <div style={{ fontSize: '20px' }}>{question.title}</div>
          //   )}
        />
      )}
    </Page>
  );
};

//timer function
// const delay = async (): Promise<void> => {
//   return new Promise<void>((resolve) =>
//     setTimeout(() => {
//       console.log('second');
//       resolve();
//     }, 5000)
//   );
// };

//return promise to the fetch
// const stuff = async (): Promise<string> => {
//   await delay();
//   return 'james';
// };

//both functions in one
// const stuff = (): Promise<string> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('james');
//     }, 5000);
//   });
// };

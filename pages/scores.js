import { useRouter } from 'next/router';

import dbConnect from '../utils/dbConnect';
import Score from '../models/Score';

import {
  Title,
  ScoreList,
  ScoreItem,
  Place,
  Name,
  Points,
  HomeButton,
} from 'styles/scores.styles';

const ScoresPage = ({ scores }) => {
  const router = useRouter();

  return (
    <>
      <Title>Highscores</Title>
      <ScoreList>
        {scores
          .sort((a, b) => (b.points > a.points ? 1 : -1))
          .slice(0, 10)
          .map((score, idx) => (
            <ScoreItem key={score._id}>
              <Place>{idx + 1}</Place>
              <Name>{score.name}</Name>
              <Points>{score.points} Points</Points>
            </ScoreItem>
          ))}
      </ScoreList>
      <HomeButton onClick={() => router.push('/')}>Go Home</HomeButton>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await Score.find({});
  const scores = result.map((doc) => {
    const score = doc.toObject();
    score._id = score._id.toString();
    return score;
  });

  return { props: { scores } };
}

export default ScoresPage;

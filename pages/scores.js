import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import Score from '../models/Score';

const ScoresPage = ({ scores }) => (
  <ul>
    {scores.map((score) => (
      <li key={score._id}>{`${score.name}: ${score.points}`}</li>
    ))}
  </ul>
);

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

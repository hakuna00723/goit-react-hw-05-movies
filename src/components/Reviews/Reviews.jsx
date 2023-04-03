import { getMovieByReviews } from '../../services/FetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDataReviews = async () => {
      try {
        const reviews = await getMovieByReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataReviews();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>Content: {content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;

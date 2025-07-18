import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from 'state';
import PostWidget from './PostWidget';

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.posts || []);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      dispatch(setPosts({ posts: data }));
    } catch (err) {
      throw new Error({ message: err.message });
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts/${userId}/posts`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (err) {
      throw new Error({ message: err.message });
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes = {},
            comments = [],
          }) => (
            <PostWidget
              key={`${_id}-${firstName}`}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          ),
        )}
    </>
  );
};

export default PostsWidget;

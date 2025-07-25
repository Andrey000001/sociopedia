import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { setFriends } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import FlexBetween from './FlexBetween';
import UserImage from './UserImage';

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user?.friends || []);
  const { palette } = useTheme();

  //STYLES
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.length && friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${_id}/${friendId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem" mb="0.5rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>

      <IconButton onClick={() => patchFriend()} sx={{ backgroundColor: primaryLight, p: '0.6rem' }}>
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};
export default Friend;

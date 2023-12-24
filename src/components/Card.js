import React, {useState} from 'react'
import VideoPlayer from './VideoPlayer'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import ReplyIcon from '@mui/icons-material/Reply';


const Card = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };
    const handleLikeToggle = () => {
      setIsLiked(!isLiked);
    };
    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        setOpen(true)
      };
    
  
  return (
    <div className='video-card'>
    <VideoPlayer />
    <div className='disc d-flex flex-column align-items-center'>
        <div class="d-flex flex-column align-items-center text-center">
            <h2>{props.title}</h2>
           {props.disc}
        </div>
        <div>
            <IconButton
      onClick={handleLikeToggle}
      style={{ color: isLiked ? 'red' : 'inherit' }}
    >
      <FavoriteIcon sx={{ fontSize: 30 }}  />
    </IconButton>
    <IconButton
      onClick={handleBookmarkToggle}
      style={{ color: isBookmarked ? 'blue' : 'inherit' }}
    >
      <ReplyIcon sx={{ fontSize: 40 }}  />
    </IconButton>
    <Button
      variant="outlined"
      color={isFollowing ? 'secondary' : 'primary'}
      onClick={handleFollowToggle}
      startIcon={isFollowing ? <PersonAddDisabledIcon /> : <PersonAddIcon />}
      style={{
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: '20px',
        padding: '8px 16px',
        fontSize: '14px',
        letterSpacing: '0.5px',
      }}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
    <div>
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Copied Link!
        </Alert>
      </Collapse>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Card
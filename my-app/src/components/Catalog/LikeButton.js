import {IconButton} from "@mui/material";
import {useEffect} from "react";
import {ThumbUp, ThumbDown} from "@mui/icons-material";

const LikeButton = ({user, card, onClick, like}) => {
  const isLiked = card.likes?.includes(user?.uid);

  useEffect(() => {}, [like]);

  if (!user && user?.uid === card.ownerId) {
    return <></>;
  }

  return (
    <IconButton onClick={() => onClick(card.id, card.likes)}>
      {isLiked ? "un-like" : "like"}
      {isLiked ? <ThumbDown /> : <ThumbUp />}
    </IconButton>
  );
};

export default LikeButton;

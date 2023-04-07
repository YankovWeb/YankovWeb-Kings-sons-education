import {IconButton} from "@mui/material";
import {useEffect} from "react";
import {ThumbUp, ThumbDown} from "@mui/icons-material";
const LikeButton = ({user, card, onClick, like}) => {
  const a = card.likes?.includes(user?.uid);
  useEffect(() => {}, [like]);
  if (user) {
    if (user.uid !== card.ownerId) {
      if (a) {
        return (
          <IconButton onClick={() => onClick(card.id, card.likes)}>
            un-like
            <ThumbDown />
          </IconButton>
        );
      }
      return (
        <IconButton onClick={() => onClick(card.id, card.likes)}>
          like
          <ThumbUp />
        </IconButton>
      );
    }
  }
};

export default LikeButton;

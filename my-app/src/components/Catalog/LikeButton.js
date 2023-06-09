import {useEffect} from "react";
import {ThumbUp, ThumbDown} from "@mui/icons-material";
import {Button} from "@mui/joy";

const LikeButton = ({user, card, onClick, like}) => {
  const isLiked = card.likes?.includes(user?.uid);

  useEffect(() => {}, [like]);

  if (!user || user?.uid === card.ownerId) {
    return <></>;
  }

  return (
    <Button
      aria-label="Like"
      variant="outlined"
      color="neutral"
      onClick={() => onClick(card.id, card.likes)}
    >
      {isLiked ? "un-like" : "like"}
      {isLiked ? <ThumbDown /> : <ThumbUp />}
    </Button>
  );
};

export default LikeButton;

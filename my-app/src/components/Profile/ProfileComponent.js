import {useUserAuth} from "../../context/AuthContext";
import {CardContent, Typography} from "@mui/material";
import * as S from "./Styles";
const ProfileComponent = () => {
  const {user} = useUserAuth();

  return (
    <S.RootBox>
      <S.AvatarStyled alt="User Avatar" src={user?.photoURL} />
      <S.CardStyled>
        <CardContent>
          <S.HeadingTypography variant="h5">
            {user?.displayName}
          </S.HeadingTypography>
          <Typography variant="body1">Email: {user?.email}</Typography>
          <Typography variant="body1">User ID: {user?.uid}</Typography>
          <S.DividerStyled />
          <Typography variant="body1">
            Last Sign-in Time: {user?.metadata.lastSignInTime}
          </Typography>
          <Typography variant="body1">
            Account Creation Time: {user?.metadata.creationTime}
          </Typography>
        </CardContent>
      </S.CardStyled>
    </S.RootBox>
  );
};

export default ProfileComponent;

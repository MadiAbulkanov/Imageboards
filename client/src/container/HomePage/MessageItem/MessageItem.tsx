import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { apiURL } from "../../../constants";

interface Props {
  messageItem: IMessage;
}

const MessageItem = ({ messageItem }: Props) => {
  const { author, message, image } = messageItem;

  const cardImage = `${apiURL}/uploads/${image}`;
  const cardAuthor = author || 'Anonymous';

  return (
    <Grid item  sx={{ width: '100%', padding: 1 }}>
    <Card sx={{ border: '1px solid #014e75', display: 'flex', flexWrap: 'wrap' }}>
      <Typography sx={{ color: '#014e75', fontSize: '25px', margin: '10px', width: '20%' }}>Author: {cardAuthor} | </Typography>
      <Typography sx={{ fontSize: '20px', margin: '16px', paddingLeft: '5px', width: '70%' }}>{message}</Typography>
      <CardContent>
      {image && (
        <CardMedia component="img" image={cardImage} sx={{objectFit: 'cover', width: '100px', height:'100px', marginLeft: '250px'}} alt={cardAuthor}/>
      )}
      </CardContent>
    </Card>
  </Grid>
  );
};

export default MessageItem;
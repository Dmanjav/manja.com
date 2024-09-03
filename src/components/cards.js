import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../styles/cards.css";

const Cards = ({ title, content, children }) => {
    return (
        <Card className='card-container'>
            <CardContent className='card-text'>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                {content}
                {children}
            </CardContent>
        </Card>
    );
};

export default Cards;
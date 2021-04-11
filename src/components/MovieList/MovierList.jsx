import { Typography } from "@material-ui/core";
import MovieList from "./MovieList";

<Card className={classes.root}>
    <CardHeader
        title={movie.title}
    />
    <CardMedia
        className={classes.media}
        image={movie.poster}
    />
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>Genres:</Typography>
            <Typography paragraph>
                {/* genres here */}
            </Typography>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
                {movie.description}
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
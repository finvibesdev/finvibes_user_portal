// Blog index page
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Blog() {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1">
        List of posts will go here.
      </Typography>
    </Container>
  );
}

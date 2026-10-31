// About page
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is the about page.
      </Typography>
    </Container>
  );
}

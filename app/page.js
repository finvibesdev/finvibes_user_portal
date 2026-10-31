// Home page
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <Typography variant="body1">
        This is the home page.
      </Typography>
    </Container>
  );
}

// Contact page
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Feel free to reach out via email.
      </Typography>
    </Container>
  );
}

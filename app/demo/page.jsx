// Demo page
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Demo() {
  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Demo Page
      </Typography>
      <Typography variant="body1">
        This is a demo page built with React and Next.js.
      </Typography>
    </Container>
  );
}

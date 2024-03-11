"use client";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const Odai: React.FC<{ id: number }> = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/themes/" + id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (!data) {
    return <>loading...</>;
  }
  return (
    <Container maxWidth="lg">
      <Paper elevation={4} sx={{ padding: 4, marginY: 2 }}>
        <Typography variant="h2" component="div">
          {data.text}
        </Typography>
      </Paper>
    </Container>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  padding: 60,
  lineHeight: "60px",
}));

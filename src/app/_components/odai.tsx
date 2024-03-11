"use client";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import Link from "next/link";

export type Theme = {
  id: number;
  text: string;
  releasedAt: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  text: string;
  userName: string;
  createdAt: string;
};

export const Odai: React.FC<{ id: number }> = ({ id }) => {
  const [data, setData] = useState<Theme | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [name, setName] = useState<string>("");

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
      {data.answers.map((answer) => {
        return (
          <>
            {answer.text} by {answer.userName}
          </>
        );
      })}
      <TextField
        id="answer"
        label="回答"
        variant="filled"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setAnswer(event.target.value);
        }}
        value={answer}
      />
      <TextField
        id="name"
        label="名前"
        variant="filled"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          console.log(answer);
          fetch(
            process.env.NEXT_PUBLIC_API_URL + "/themes/" + id + "/answers",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                text: answer,
                userName: name,
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
        style={{ width: "100%" }}
      >
        送信
      </Button>
      <Link href="/">戻る</Link>
    </Container>
  );
};

"use client";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Theme } from "./odai";

export const OdaiIndex: React.FC = () => {
  const [data, setData] = useState<Theme[]>([]);
  const [theme, setTheme] = useState<string>("");
  const [dateTime, setDateTime] = useState<Dayjs>(dayjs());

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/themes")
      .then((res) => res.json())
      .then((data) => setData(data.themes));
  }, []);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {data.map((theme) => {
          const path = `/themes/${theme.id}`;
          return (
            <Link href={path} key={theme.id}>
              {theme.text}
            </Link>
          );
        })}
        <TextField
          id="theme"
          label="お題"
          variant="filled"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTheme(event.target.value);
          }}
          value={theme}
        />
        <DateTimePicker
          label="回答期限"
          defaultValue={dateTime}
          value={dateTime}
          onChange={(newTime) => {
            if (newTime) setDateTime(newTime);
          }}
          disableFuture
        />
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            console.log(dateTime.toString());
            fetch(process.env.NEXT_PUBLIC_API_URL + "/themes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                text: theme,
                releasedAt: dateTime.format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"), //API側で時刻がパースできていない気がする
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
          style={{ width: "100%" }}
        >
          送信
        </Button>
      </LocalizationProvider>
    </>
  );
};

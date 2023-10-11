import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Coin {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const ENDPOINT =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

const Section1 = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res?.ok && res.json())
      .then((data) => {
        const _data = data?.slice(0, 20) || [];
        setCoins(_data);
      });
  }, []);

  return (
    <Paper>
      <Marquee gradient={false} speed={50}>
        {coins.map((coin) => (
          <Stack
            sx={{ mx: 1.5, py: 0.5 }}
            key={coin.id}
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Avatar src={coin.image} sx={{ height: 20, width: 20 }} />

            <Typography>{coin.name}</Typography>

            <Typography color="info.light">${coin.current_price}</Typography>

            <Typography
              sx={{
                color:
                  coin.price_change_percentage_24h >= 0
                    ? "success.light"
                    : "error.light",
              }}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </Typography>
          </Stack>
        ))}
      </Marquee>
    </Paper>
  );
};

export default Section1;

export type StockMetadata = {
  id: string;
  name: string;
  ticker: string;
  market: string;
  aliases?: string[];
  isCustom?: boolean;
};

export const localStocks: StockMetadata[] = [
  {
    id: "kospi-005930",
    name: "삼성전자",
    ticker: "005930",
    market: "KOSPI",
    aliases: ["Samsung Electronics", "삼성 전자", "삼전"],
  },
  {
    id: "kospi-000660",
    name: "SK하이닉스",
    ticker: "000660",
    market: "KOSPI",
    aliases: ["SK Hynix", "하이닉스"],
  },
  {
    id: "kospi-009150",
    name: "삼성전기",
    ticker: "009150",
    market: "KOSPI",
    aliases: ["Samsung Electro-Mechanics"],
  },
  {
    id: "kospi-006400",
    name: "삼성SDI",
    ticker: "006400",
    market: "KOSPI",
    aliases: ["Samsung SDI"],
  },
  { id: "kospi-035420", name: "NAVER", ticker: "035420", market: "KOSPI", aliases: ["네이버"] },
  { id: "kospi-035720", name: "카카오", ticker: "035720", market: "KOSPI", aliases: ["Kakao"] },
  {
    id: "kospi-005380",
    name: "현대차",
    ticker: "005380",
    market: "KOSPI",
    aliases: ["Hyundai Motor"],
  },
  {
    id: "kospi-012450",
    name: "한화에어로스페이스",
    ticker: "012450",
    market: "KOSPI",
    aliases: ["Hanwha Aerospace"],
  },
  { id: "nasdaq-nvda", name: "NVIDIA", ticker: "NVDA", market: "NASDAQ", aliases: ["엔비디아"] },
  { id: "nasdaq-aapl", name: "Apple", ticker: "AAPL", market: "NASDAQ", aliases: ["애플"] },
  { id: "nasdaq-tsla", name: "Tesla", ticker: "TSLA", market: "NASDAQ", aliases: ["테슬라"] },
  {
    id: "nasdaq-msft",
    name: "Microsoft",
    ticker: "MSFT",
    market: "NASDAQ",
    aliases: ["마이크로소프트"],
  },
  {
    id: "nasdaq-googl",
    name: "Alphabet",
    ticker: "GOOGL",
    market: "NASDAQ",
    aliases: ["Google", "구글"],
  },
  { id: "nasdaq-amzn", name: "Amazon", ticker: "AMZN", market: "NASDAQ", aliases: ["아마존"] },
  {
    id: "nasdaq-meta",
    name: "Meta Platforms",
    ticker: "META",
    market: "NASDAQ",
    aliases: ["Meta", "메타"],
  },
];

function normalizeSearchText(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

export function searchStocks(query: string, stocks: StockMetadata[] = localStocks) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return [];
  }

  return stocks
    .map((stock) => {
      const searchableValues = [
        stock.name,
        stock.ticker,
        stock.market,
        ...(stock.aliases ?? []),
      ].map(normalizeSearchText);
      const exactMatch = searchableValues.some((value) => value === normalizedQuery);
      const partialMatch = searchableValues.some((value) => value.includes(normalizedQuery));

      return {
        stock,
        rank: exactMatch ? 0 : partialMatch ? 1 : 2,
      };
    })
    .filter((result) => result.rank < 2)
    .sort((a, b) => a.rank - b.rank || a.stock.name.localeCompare(b.stock.name))
    .map((result) => result.stock)
    .slice(0, 6);
}

export function createCustomStock(input: string): StockMetadata {
  const name = input.trim();

  return {
    id: `custom-${name.toLowerCase().replace(/\s+/g, "-") || "stock"}`,
    name,
    ticker: "직접 입력",
    market: "직접 입력",
    isCustom: true,
  };
}

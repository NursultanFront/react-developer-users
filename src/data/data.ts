export type Options = {
  value: string;
  label: string;
  default?: boolean;
};

export const options: Options[] = [
  { value: "all", label: "Все", default: true },
  { value: "moderation", label: "Модерация объявлений" },
  { value: "blog", label: "Блог" },
  { value: "support", label: "Тех. поддержка" },
  { value: "client", label: "Обращения клиентов" },
  { value: "analityca", label: "Аналитика" },
  { value: "promotion", label: "Акции" },
];

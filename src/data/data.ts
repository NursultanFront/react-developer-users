export type Options = {
  value: string;
  label: string;
  default?: boolean;
  checked: boolean;
};

export const options: Options[] = [
  { value: "all", label: "Все", default: true, checked: false },
  { value: "moderation", label: "Модерация объявлений", checked: false },
  { value: "blog", label: "Блог", checked: false },
  { value: "support", label: "Тех. поддержка", checked: false },
  { value: "client", label: "Обращение клиентов", checked: false },
  { value: "analityca", label: "Аналитика", checked: false },
  { value: "promotion", label: "Акции", checked: false },
];

/* @noflow */
export type Stats = {
  stats: Stat[];
};

/* @noflow */
export type Stat = {
  yesterday: number;
  today: number;
  lastweek: number;
  thisweek: number;
  lastmonth: number;
  thismonth: number;
  alltime: number;
  dayIncrease: string;
  dayTextClass: string;
  weekIncrease: string;
  weekTextClass: string;
  monthIncrease: string;
  monthTextClass: string;
  name: string;
} & StatOptionalProperties;

/* @noflow */
export type StatOptionalProperties = {
  name: string;
  href: string;
};

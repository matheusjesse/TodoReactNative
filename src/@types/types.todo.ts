export type DaysOfTheWeekTypes = {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thrusday: boolean;
  friday: boolean;
  saturday: boolean;
};

export type DayPeriodType = {
  morning: boolean;
  afternoon: boolean;
  night: boolean;
};

export type TodoRegisterType = {
  noteText: string;
  userId: number;
  completed: boolean;
  dayPeriod: DayPeriodType;
  daysOfTheWeek: DaysOfTheWeekTypes;
};

export type TodoContextType = {
  updateTheme: (theme: boolean) => void;
  loadThemeColor: () => boolean;
  registerTodo: (data: TodoRegisterType) => void;
  loadTodo: () => TodoRegisterType;
};

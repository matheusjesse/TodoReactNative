import React from 'react';
import TodoInLineContainer, {CheckButton, Text} from './style';
import CircleSvg from '../../assets/images/circle-line-icon.svg';
import CircleCheckSvg from '../../assets/images/check-mark-circle-icon.svg';
import EditSvg from '../../assets/images/edit-box-icon.svg';
import theme from '../../styles/theme';
interface ITodoInfo {
  data: {
    id: number;
    noteText: string;
    completed: boolean;
  };
}

const EmptyCircle = () => {
  return <CircleSvg height={30} width={30} fill={theme.ThemeColor.secondary} />;
};

const CheckCircle = () => {
  return (
    <CircleCheckSvg height={30} width={30} fill={theme.ThemeColor.secondary} />
  );
};

function TodoInLine({data}: ITodoInfo) {
  return (
    <TodoInLineContainer key={data.id}>
      <CheckButton>
        {!data.completed ? <EmptyCircle /> : <CheckCircle />}
      </CheckButton>
      <Text style={{color: theme.ThemeColor.secondary}}>{data.noteText}</Text>
      <CheckButton>
        <EditSvg height={30} width={30} fill={theme.ThemeColor.secondary} />
      </CheckButton>
    </TodoInLineContainer>
  );
}

export default TodoInLine;

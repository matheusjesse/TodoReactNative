import React from 'react';
import TodoInLineContainer, {
  CheckButton,
  styles,
  Text,
  TodoTextContainer,
} from './style';
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
  return <CircleSvg height={30} width={30} fill={theme.ThemeColor.fontColor} />;
};

const CheckCircle = () => {
  return (
    <CircleCheckSvg height={30} width={30} fill={theme.ThemeColor.fontColor} />
  );
};

function TodoInLine({data}: ITodoInfo) {
  return (
    <TodoInLineContainer key={data.id} style={styles.boxShadow}>
      <CheckButton>
        {!data.completed ? <EmptyCircle /> : <CheckCircle />}
      </CheckButton>
      <TodoTextContainer>
        <Text style={{color: theme.ThemeColor.fontColor}}>{data.noteText}</Text>
        <CheckButton>
          <EditSvg height={30} width={30} fill={theme.ThemeColor.fontColor} />
        </CheckButton>
      </TodoTextContainer>
    </TodoInLineContainer>
  );
}

export default TodoInLine;

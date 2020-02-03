import React, { useCallback } from 'react';

import './TodoList.scss';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  //이 함수는 react-virtualized의 List컴포넌트에서 각 TodoItem을 렌더링할 때 사용하며, 이 함수를 List컴포넌트의 props로 설정해주어야 합닝다.
  //이 함수는 파라미터에 index,key,style 값을 객체 타입으로 받아와서 사용합니다.
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512} //전체 크기
      height={513} //전체 높이
      rowCount={todos.length} //항목 개수
      rowHeight={56} //항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본적용되는 outline스타일 제거
    />
  );
};

export default React.memo(TodoList);

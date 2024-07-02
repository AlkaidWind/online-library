import React from 'react';
import BookList from './components/BookList';
import BorrowBook from './components/BorrowBook';
import ReturnBook from './components/ReturnBook';
import UserManagement from './components/UserManagement';

function App() {
    return (
      <div className="App">
        // 图书列表组件
        <BookList />
        // 借书组件
        <BorrowBook />
        // 还书组件
        <ReturnBook />
        // 用户管理组件
        <UserManagement />
      </div>
    );
  }

export default App;

import React, { useState } from 'react';

function BorrowBook() {
    const [bookId, setBookId] = useState('');
  
    const handleBorrow = () => {
      // 调用API来借阅一本书
      console.log(`Borrowing book with ID: ${bookId}`);
    };
  
    return (
      <div>
        <input 
          // 输入框用于输入书籍ID
          type="text" 
          value={bookId} 
          onChange={(e) => setBookId(e.target.value)} 
        />
        <button 
          // 借阅按钮，点击后调用handleBorrow函数
          onClick={handleBorrow}
        >
          Borrow Book
        </button>
      </div>
    );
}  

export default BorrowBook;

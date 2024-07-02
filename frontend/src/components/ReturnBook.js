import React, { useState } from 'react';

function ReturnBook() {
    // 使用 useState 钩子函数定义一个状态变量 bookId，初始值为空字符串
    const [bookId, setBookId] = useState('');
  
    // 定义一个 handleReturn 函数，用于处理还书操作
    const handleReturn = () => {
      // 调用 API 来还书
      console.log(`Returning book with ID: ${bookId}`);
    };
  
    return (
      <div>
        {/* 文本输入框，显示 bookId 的值，当输入内容变化时更新 bookId 的值 */}
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
        {/* 按钮，点击后触发 handleReturn 函数 */}
        <button onClick={handleReturn}>Return Book</button>
      </div>
    );
}  

export default ReturnBook;

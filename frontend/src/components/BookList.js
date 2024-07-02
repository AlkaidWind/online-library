import React, { useEffect, useState } from 'react';

function BookList() {
    // 使用 React 的 useState 钩子初始化一个空数组 books，并获取其 setter 函数 setBooks
    const [books, setBooks] = useState([]);
  
    // 使用 React 的 useEffect 钩子在组件加载时发送请求获取书籍数据
    useEffect(() => {
      // 发送 GET 请求到 '/api/books' 接口
      fetch('/api/books')
        // 将响应的 JSON 数据解析为对象
        .then(response => response.json())
        // 将解析后的数据设置为 books 的值
        .then(data => setBooks(data))
        // 如果请求过程中发生错误，则在控制台打印错误信息
        .catch(error => console.error('Error fetching books:', error));
    }, []);
  
    // 渲染 books 数组中的每一本书籍
    return (
      <div>
        {books.map(book => (
          // 使用书籍的 id 作为 key，渲染书籍的标题
          <div key={book.id}>{book.title}</div>
        ))}
      </div>
    );
}  

export default BookList;

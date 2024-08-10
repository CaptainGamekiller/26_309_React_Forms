import React, { useState } from "react";

function App() {
  // 定義一個名為 App 的函數型組件
  // 定義狀態變量 name 和其更新函數 setName，初始值為空字串 ""
  const [name, setName] = useState("");
  // 定義狀態變量 headingText 和其更新函數 setHeading，初始值為空字串 ""
  const [headingText, setHeading] = useState("");

  // 定義一個名為 handleChange 的函數，負責處理輸入框中的變化事件
  function handleChange(event) {
    console.log(event.target.value); // 在控制台打印出輸入框的當前值
    setName(event.target.value); // 使用 setName 函數更新 name 的值為輸入框中的當前值
  }

  // 定義一個名為 handleClick 的函數，負責處理按鈕點擊事件
  function handleClick(event) {
    setHeading(name); // 使用 setHeading 函數將 headingText 更新為當前的 name 值
    event.preventDefault(); // 阻止表單提交的默認行為，防止頁面刷新
  }

  return (
    <div className="container">
      {/* 渲染一個 class 為 "container" 的 div 元素 */}
      <h1>Hello {headingText}</h1>
      {/* 渲染一個 h1 元素，顯示 "Hello " 後面跟著 headingText 的值 */}
      <form onSubmit={handleClick}>
        {/* 渲染一個表單元素，當表單提交時調用 handleClick 函數 */}
        <input
          // 當輸入框的內容發生變化時調用 handleChange 函數
          onChange={handleChange}
          type="text"
          placeholder="What's your name?" // 輸入框中的佔位文字顯示 "What's your name?"
          value={name} // 設定輸入框的值為當前的 name 狀態
        />
        {/* 渲染一個提交按鈕，當按下時會提交表單並觸發 onSubmit 事件 */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
// 將 App 組件作為默認導出

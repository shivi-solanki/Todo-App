import React, { useState, useEffect } from 'react'
import "./style.css"
const Todo = () => {

       const getLocalData = () => {
              const list = localStorage.getItem("myTodo")
              if (list) {
                     return JSON.parse(list)
              }
              else {
                     return []
              }
       }

       const [inputData, setInputData] = useState("")
       const [items, setItems] = useState(getLocalData())
       const [isEditItem, setIsEditItem] = useState("")
       const [toggleButton, setToggleButton] = useState(false)

       // add items function 
       const addItem = () => {
              if (!inputData) {
                     alert("PLEASE ENTER TODO WORK")
              }
              else if (inputData && toggleButton) {
                     setItems(
                            items.map((curEle) => {
                                   if (curEle.id === isEditItem) {
                                          return { ...curEle, name: inputData }
                                   }
                                   return curEle;
                            })
                     )
                     setToggleButton(false)
                     setInputData([])
                     setIsEditItem(null)

              }
              else {
                     const myNewInputData = {
                            id: new Date().getTime().toString(),
                            name: inputData
                     }
                     setItems([...items, myNewInputData])
                     setInputData("")
              }
       }
       // DELETE ITEMS 
       const deleteItem = (index) => {
              const updateItem = items.filter((curEle) => {
                     return curEle.id !== index;
              })
              setItems(updateItem)
       }
       // editItem in list 
       const editItem = (index) => {
              const itemEdited = items.find((curEle) => {
                     return curEle.id === index;
              })
              setToggleButton(true)
              setInputData(itemEdited.name)
              setIsEditItem(index)
       }

       // REMOVE ALL ITEMS 
       const removeAll = () => {
              setItems([]);
       }

       // adding localStorage
       useEffect(() => {
              localStorage.setItem("myTodo", JSON.stringify(items))
       }, [items])

       return (
              <>
                     <div className="main-div">
                            <div className="child-div">
                                   <figure>
                                          <img src="./images/todo.png" alt="" />
                                          <figcaption>Add Your List Here ✌</figcaption>
                                   </figure>


                                   <div className="addItems">
                                          <input type="text"
                                                 placeholder="✍ Add Item"
                                                 className="form-control"
                                                 onChange={(e) => { setInputData(e.target.value) }}
                                                 value={inputData}
                                          />
                                          {
                                                 toggleButton ? <i className="far fa-edit add-btn" onClick={addItem} ></i> :
                                                        <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                                          }
                                   </div>

                                   <div className="showItems">

                                          {
                                                 items.map((curEle, index) => {

                                                        return (

                                                               <div className="eachItem" key={index}>
                                                                      <h3>{curEle.name}</h3>
                                                                      <div className="todo-btn">
                                                                             <i className="far fa-edit add-btn"
                                                                                    onClick={() => editItem(curEle.id)}></i>
                                                                             <i className="far fa-trash-alt add-btn"
                                                                                    onClick={() => deleteItem(curEle.id)}></i>
                                                                      </div>
                                                               </div>
                                                        )
                                                 })}
                                   </div>


                                   <div className="showItems">
                                          <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                                                 <span>Check list</span>
                                          </button>
                                   </div>


                            </div>
                     </div>
              </>
       )
}

export default Todo

import React, { useState } from "react";
import "../css/body.css";
import Add from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const Body = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [addItem, setAddItem] = useState([]);
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addnote = () => {
    setAddItem((preval) => {
      return [...preval, note];
    });
    setNote({
      title: "",
      content: "",
    });
  };

  const deleteItem = (id) => {
    setAddItem(
      (oldData) => {
        return oldData.filter((curr, index) => {
          return index !== id;
        });
      }

      // oldData.filter((curr, index) => {
      //   return index !== id;
      // })
    );
  };

  return (
    <>
      <div className="container-fluid  mt-4">
        <div className="row card__box">
          <div className="card card__body">
            <div className="card__input">
              <input
                type="text"
                placeholder="Title"
                className="card__title__input"
                name="title"
                onChange={inputEvent}
                value={note.title}
              />

              <textarea
                className="card__note__input"
                cols=""
                rows=""
                placeholder="Write a note..."
                autoComplete="off"
                name="content"
                onChange={inputEvent}
                value={note.content}
              ></textarea>
            </div>

            <button className="button" onClick={addnote}>
              <Add />
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 ">
        <div className="row card_note col-11">
          {addItem.map((val, index) => {
            return (
              <>
                <div key={index} className="card notesave_box">
                  <div className="card-body">
                    <h6>{val.title}</h6>
                    <p className="para">{val.content}</p>
                  </div>
                  <button
                    className="button2"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;

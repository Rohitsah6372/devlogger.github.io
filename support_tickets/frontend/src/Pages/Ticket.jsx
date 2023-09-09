import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from 'react-modal';
import { useSelector, useDispatch } from "react-redux";

import {
  getTicket,
  reset,
  closeTicket,
} from "./../features/Tickets/ticketSlice";
import Spinner from "./../Components/Spinner";
import { getNotes,createNote, reset as notesReset } from "./../features/Notes/NotesSlice";

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

modal.setAppElement('#root')


function Ticket() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));

    //esLint-disable-next-line
  }, [isError, message, ticketId]);

  //closeticket
  const onThisClick = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };

  //Create note submit
  const onNoteSubmit=(e)=>{
    e.preventDefault();
    dispatch(createNote({noteText, ticketId}))
    closeModal()
  }

  //open / close modal
  const openModal = () =>setModalIsOpen(true)
  const closeModal = () =>setModalIsOpen(false)

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went Wrong</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <h2>
          Ticket ID : {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted : {new Date()(ticket.createdAt).toLocalString("en-Us")}
        </h3>
        <h3>Product : {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of the Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
      </header>
      {ticket.status !== 'closed' && (
        <button onClick={openModal} className="btn"><FaPlus/>Add Note</button>
      ) }
      {notes.map((note)=>(
        <NoteItem  key={note._id} note={note} />
      )}
      {ticket.status !== "closed" && (
        <button onClick={onThisClick} className="btn btn-block">
          Close Ticket
        </button>
      )}
      <Modal isOpen={modelIsOpen} onRequestClose={closeModal} style={coustomStyles} contentLabel='Add Note' >
      <h2>Add Note</h2>
      <button className="btn-close" onClick={closeModal} >X</button>
      <form action="" onSubmit={onNoteSubmit} >
          <div className="form-group">
          <textarea name="noteText" className='form-control' id="noteText" value="noteText" placeholder="Note Text"cols="30" onChange={(e)=>setNoteText(e.target.value)} rows="10"></textarea>
          </div>
          <div className="form-group">
          <button type='submit' className="btn">Submit</button>
          </div>
      </form>
      <Modal/>
    </div>
  );
}

export default Ticket;

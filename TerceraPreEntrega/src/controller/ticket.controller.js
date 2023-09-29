//Nuevo archivo/controller
import { TICKETDAO } from "../dao/index.js";

//Guardamos ticket dependiendo si es en memoria o si es en mongo
async function saveTicket (req, res){
    const ticket = req.body;
    const user = req.user;
    await TICKETDAO.save(user);
    res.send(ticket)   
}
//Obtenemos todos los ticket dependiendo si es en memoria o si es en mongo
async function getAllTickets(req,res){
    const tickets = await TICKETDAO.getAll();
    res.send (tickets)
}
//Obtenemos todos los ticket segun id dependiendo si es en memoria o si es en mongo
async function getTicketById(req,res){
    const tid = req.params.tid;
    const ticketId = await TICKETDAO.getTicketId(tid);
    console.log(ticketId);
    return ticketId;
}
//Exportamos
export {saveTicket,getAllTickets,getTicketById}
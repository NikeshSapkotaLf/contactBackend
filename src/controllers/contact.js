import HttpStatus from "http-status-codes";
import * as contactService from "../services/contactService";

export function fetchAll(req, res, next) {
  contactService
    .getAllContacts(req.body.userId)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function create(req, res, next) {
  console.log(`req.body inside contorller`, req.body);
  contactService
    .createContact(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => {
      console.log(`err occured here in contoller`, err);
      next(err);
    });
}

export function fetchById(req, res, next) {
  contactService
    .getContact({ params: req.params.id, userId: req.body.userId })
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function update(req, res, next) {
  console.log(`req upodate`, req);
  contactService
    .updateContact(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function deleteContact(req, res, next) {
  contactService
    .deleteContact({ params: req.params.id, userId: req.body.userId })
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}

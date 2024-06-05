import items from "../contacts.json"
import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items,
	}, 
	reducers: {
		addContact(state, action) {
			state.items.push(action.payload)
		},
		
		deleteContact(state, action) {
			console.log('deleteContact action:', action);
			state.items = state.items.filter(item => item.id !== action.payload)
		},
		
	}
})

export const { addContact, deleteContact } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer

export const selectContacts = state => state.contacts.items
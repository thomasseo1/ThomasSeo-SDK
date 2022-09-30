import axios from 'axios'

export default class BookApi {
	constructor() {
		this.defaultOption = {
			limit: 100,
			page: 1,
			offset: 0,
			sort: '',
			match: '',
			include: '',
			exists: '',
			regex: '',
			symbol: '',
		}
	}

	getAllBooks(option) {

		const {limit, page, offset, sort, match, include, exists, regex, symbol} = Object.assign(this.defaultOption, option);

		return axios.get(`https://the-one-api.dev/v2/book?limit=${limit}&page=${page}&offset=${offset}${(sort)? `&sort=${sort}` : `` }${match?'&'+match:''}${include?'&'+include:''}${exists?'&'+exists:''}${regex?'&'+regex:''}${symbol?'&'+symbol:''}`)
	}

	getSpecificBook(id) {
		if(!id || typeof id !== 'string') {
			throw new Error('The id that was provided was invalid')
		}

		return axios.get(`https://the-one-api.dev/v2/book/${id}`)
		
	}

	getSpecificBookChapters(id, option) {
		if(!id || typeof id !== 'string') {
			throw new Error('The id that was provided was invalid')
		}

		const {limit, page, offset, sort, match, include, exists, regex, symbol} = Object.assign(this.defaultOption, option);

		return axios.get(`https://the-one-api.dev/v2/book/${id}/chapter?limit=${limit}&page=${page}&offset=${offset}${(sort)? `&sort=${sort}` : `` }${match?'&'+match:''}${include?'&'+include:''}${exists?'&'+exists:''}${regex?'&'+regex:''}${symbol?'&'+symbol:''}`)
		
	}
}
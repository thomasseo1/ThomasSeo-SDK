import axios from 'axios';

export default class QuoteApi {
	constructor(token) {
		this.token = token;
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

	getAllQuotes(option) {
		const {limit, page, offset, sort, match, include, exists, regex, symbol} = Object.assign(this.defaultOption, option);

		return axios.get(`https://the-one-api.dev/v2/quote?limit=${limit}&page=${page}&offset=${offset}${(sort)? `&sort=${sort}` : `` }${match?'&'+match:''}${include?'&'+include:''}${exists?'&'+exists:''}${regex?'&'+regex:''}${symbol?'&'+symbol:''}`, {
    	headers: { Authorization:"Bearer " + this.token }
  	})

	}

	getSpecificQuoteFromMovie(id) {
		if(!id || typeof id !== 'string') {
			throw new Error('The id that was provided was invalid')
		}
		
		return axios.get(`https://the-one-api.dev/v2/quote/${id}`, {
    	headers: { Authorization:"Bearer " + this.token }
  	})

	}
}
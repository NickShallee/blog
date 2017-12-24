import moment from 'moment';

export class PostService {

	constructor() {
		if (!window.localStorage.getItem("posts")) {
			let allPosts = [{
				id: 1,
				title: "Our first post",
				body: "This is the body of our first post",
				author: "Nick",
				tags: ["personal"],
				created_at: new Date('January 5, 2017')
			},{
				id: 2,
				title: "Our second post",
				body: "This is the body of our second post",
				author: "Jane",
				tags: ["aurelia", "javascript"],
				created_at: new Date('April 30, 2017')
			},{
				id: 3,
				title: "Our third post",
				body: "This is the body of our third post",
				author: "Nick",
				tags: ["rambling"],
				created_at: new Date('December 24, 2017')
			}]; 
			window.localStorage.setItem("posts", JSON.stringify(allPosts));
		}
	}

	all() {
		return JSON.parse(window.localStorage.getItem("posts")).sort((a,b) => {
		  return new Date(b.created_at) - new Date(a.created_at);
		});
	}

	allArchives() {
		let allPosts = this.all();
		let allArchives = [];
		allPosts.forEach(post => {
			let formattedDate = moment(post.created_at).format('MMMM YYYY');
			if (allArchives.indexOf(formattedDate) < 0) {
				allArchives.push(formattedDate);
			}
		})
		return allArchives;
	}

	allTags() {
		let allPosts = this.all();
		let allTags = [];
		allPosts.forEach(post => {
			post.tags.forEach(tag => {
				if (allTags.indexOf(tag) < 0) {
					allTags.push(tag);
				}
			});
		});
		return allTags;
	}

	findOne(id) {
		return this.all().filter(post => post.id == id)[0];
	}

	publish(post) {	
		let allPosts = this.all();
		let nextId = Math.max.apply(Math,allPosts.map(post => { return post.id; })) + 1;
		allPosts.push({
			id: nextId,
			title: post.title,
			body: post.body,
			author: "Nick",
			tags: post.tags,
			created_at: new Date()
		});
		window.localStorage.setItem("posts", JSON.stringify(allPosts));
	}

	update(post) {
		let allPosts = this.all();
		allPosts.forEach(eachPost => {
			if (eachPost.id == post.id) {
				eachPost.title = post.title;
				eachPost.body = post.body;
				eachPost.tags = post.tags;
			}
		})
		window.localStorage.setItem("posts", JSON.stringify(allPosts));
	}

}
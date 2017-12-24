import {inject} from 'aurelia-framework';
import {PostService} from 'services/post-service';

@inject (PostService)
export class Index {

	constructor(PostService) {
		this.postService = PostService;
		this.allPosts = this.postService.all();
	}

}
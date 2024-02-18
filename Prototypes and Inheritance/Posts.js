function Posts() {
    class Post {
        constructor(title, content) {
            this.title = title || "No title"; 
            this.content = content || "No content"; 
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number.isInteger(parseInt(likes)) ? parseInt(likes) : 0;
            this.dislikes = Number.isInteger(parseInt(dislikes)) ? parseInt(dislikes) : 0;
            this.comments = [];
        }
    
        addComment(comment) {
            if (typeof comment === "string" && comment.trim() !== "") { 
                this.comments.push(comment);
            }
        }
    
        toString() {
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `\nRating: ${rating}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n` + this.comments.map(comment => ` * ${comment}`).join('\n');
            }
            return result;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views = 0) {
            super(title, content);
            this.views = Number.isInteger(views) ? views : 0; 
        }
    
        view() {
            this.views++;
            return this; 
        }
    
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    
return {
    Post,
    SocialMediaPost,
    BlogPost
};
}

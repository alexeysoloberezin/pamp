import Axios from "~/infrastructure/Axios";
import {Article, postsTags, postsTagsById, postsTagsForRequest} from "~/model/Article";

class PostsService {
  static async getPosts(tags: string = postsTagsForRequest[postsTags.Osago]): Promise<Article[] | []> {
    try {
      const res = await Axios({url: 'https://pampadu.ru/blog/wp-json/wp/v2/posts/', params: {per_page: '4', tags, _fields: 'date,link,title.rendered,images,tags,excerpt,author_name'}})

      return res.data.map(item => {
        const {date, link} = item
        const {rendered} = item.title
        return {
          image: item.images?.medium || '',
          tags: item.tags.map(el => postsTagsById[el] ?? el),
          title: rendered,
          preview: item.excerpt.rendered,
          author: {
            img: 'string',
            name: item.author_name,
          },
          creationDate: new Date(date),
          views: 'number',
          href: link,
        }
      })
    } catch (err) {
      return []
    }
  }
}

export default PostsService;

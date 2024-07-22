import ApiHelper from "~/utils/ApiHelper";

export class Meta {
  static generateOgUrl(route){
    return {property: 'og:url', hid: 'og:url', content: ApiHelper.origin + route.fullPath}
  }
  static addPageNumberMetaText(pageNumber): string {
    if(!pageNumber) return ''

    const pageText = (pageNumber) => ` - Страница ${pageNumber}`
    return pageText(pageNumber)
  }
}



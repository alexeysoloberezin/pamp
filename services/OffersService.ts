import Axios, {axiosUrls} from "~/infrastructure/Axios";
import {Article, postsTags, postsTagsById, postsTagsForRequest} from "~/model/Article";
import {filterOffers} from "~/model/entities/offer";
import {OfferCategories, OfferProgram, ProgramModel, ProgramOrOffer} from "~/model/entities/affiliateProgramm";

class OffersService {
  static async fetchOffers(productId?: string): Promise<any> {
    try {
      const {urlGetOffers} = axiosUrls
      const res = await Axios({method: 'get', url: urlGetOffers, params: {productId}})

      return res.data
    } catch (err) {
      return []
    }
  }

  static async getOffers(productId?: string, affDetailProgramName?: string): Promise<any>{
    const offers = await this.fetchOffers(productId)
    let data = []
    if(offers){
      data = filterOffers({
        offers,
        affDetailProgramName,
      })
    }
    return data
  }

  static getBlockOffers({program, offersLength, descriptionPrice, notAffilProgramm}: {program?: any ,notAffilProgramm?:boolean, offersLength: number, descriptionPrice: number}){
    if('apiCategory' in program || notAffilProgramm){
      return {
        ...program,
        title: this.replaceTitle(program.title, offersLength),
        description: this.replaceDescription(program.description, descriptionPrice)
      }
    }

    return {
      ...program,
      blocks: {
        ...program.blocks,
        offers: {
          ...program.blocks.offers,
          title: this.replaceTitle(program.blocks.offers.title, offersLength),
          description: this.replaceDescription(program.blocks.offers.description, descriptionPrice)
        }
      }
    }
  }

  static replaceTitle(text: string, number: string | number): string {
    const regex = /Более (\d+)|(\d+) офферов/gi;

    return text.replace(regex, (_, match1, match2) => {
      if (match1) {
        return `Более ${number}`;
      } else if (match2) {
        return `${number} офферов`;
      }
      return _;
    });
  }

  static replaceDescription(text: string, number: string | number): string {
    const regex = /до\s+(\d+(\s\d+)*)/gi;
    return text.replace(regex, `до ${number}`);
  }
}

export default OffersService;

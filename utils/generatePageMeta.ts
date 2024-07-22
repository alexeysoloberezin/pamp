import {OfferType} from "~/model/entities/offer";
import {getBasicLinkByName} from "~/model/entities/affiliateProgramm/AffiliateOffer";

export default function generatePageMeta(queryPage, path, arrayLength ) {
  const links = []

  const canonicalLinkWithPage = new URL(path);
  if (queryPage) {
    canonicalLinkWithPage.searchParams.set('page', String(+queryPage + 1));
  } else {
    canonicalLinkWithPage.searchParams.set('page', '2');
    queryPage = '1'
  }

  if(arrayLength > (+queryPage * 8)){
    links.push({
      rel: 'next',
      href: canonicalLinkWithPage.toString()
    })
  }

  if(queryPage != '1'){
    canonicalLinkWithPage.searchParams.set('page', String(+queryPage - 1));
    links.push({
      rel: 'prev',
      href: canonicalLinkWithPage.toString()
    })
  }

  return links
}

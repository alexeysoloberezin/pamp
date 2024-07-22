import { getPartner } from "~/model/entities/ic-partner";

export default function ({ redirect, params }) {
  //Серверный редирект, если партнера не существует
  const name = params.name?.toLowerCase();
  if (name == 'sberbank-strahovanie') redirect("/");
  if (!getPartner(name)) redirect("/404");
}

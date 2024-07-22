import { getCity } from "~/model/entities/city";

export default function ({ redirect, params }) {
  //Серверный редирект, если города не существует
  const name = params.name?.toLowerCase();
  if (!getCity(name)) redirect("/404");
}

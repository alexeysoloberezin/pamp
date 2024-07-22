import { getProgram } from "~/model/entities/affiliateProgramm";

export default function ({ redirect, params }) {
  //Серверный редирект, если программы не существует
  const name = params.name?.toLowerCase();
  if (!getProgram(name)) redirect("/404");
}

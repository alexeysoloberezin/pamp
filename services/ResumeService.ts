import Axios from "~/infrastructure/Axios";

class ResumeService {
  static async sendResume(form: any) {
    const res = await Axios.post(
      "https://agents.pampadu.ru/api/landingForm/newResumeContact",
      form
    );
    return res;
  }
}

export default ResumeService;

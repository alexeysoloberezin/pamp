import { AnalyticsIntegration } from "~/core/Analytics/IAnalyticsIntegration";

enum YandexEvents {
  LandingRegistration = "landing_registration",
  VisitWidgets = "visit_widgets",
  VisitBlog = "visit_blog",
  VisitCareer = "visit_career",
  SubmitFormCpa = "submitformcpa",
}

class YandexAnalytics extends AnalyticsIntegration {
  static instance: YandexAnalytics;
  public static getInstance(): YandexAnalytics {
    if (!YandexAnalytics.instance) {
      YandexAnalytics.instance = new YandexAnalytics();
    }
    return YandexAnalytics.instance;
  }
  private sendEvent(event: YandexEvents) {
    const ym = (window as any).ym;
    if (ym) ym(55127530, "reachGoal", event);
    else setTimeout(() => this.sendEvent(event), 1000);
  }

  innerLandingRegistration() {
    this.sendEvent(YandexEvents.LandingRegistration);
  }

  innerTargetVisitAgents() {}

  innerTargetVisitBlog() {
    this.sendEvent(YandexEvents.VisitBlog);
  }

  innerSubmitFormCpa() {
    this.sendEvent(YandexEvents.SubmitFormCpa);
  }

  innerTargetVisitCareer() {
    this.sendEvent(YandexEvents.VisitCareer);
  }

  innerTargetVisitPartners() {}

  innerTargetVisitScience() {}

  innerTargetVisitTruck() {}

  innerTargetVisitWidgets() {
    this.sendEvent(YandexEvents.VisitWidgets);
  }
}
export default YandexAnalytics.getInstance();

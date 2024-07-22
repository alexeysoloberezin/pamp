import { AnalyticsIntegration } from "./IAnalyticsIntegration";
enum OkEvents {
  LandingRegistration = "landing_registration",
  VisitBlog = "visit_blog",
  VisitCareer = "visit_career",
}

class OkAnalytics extends AnalyticsIntegration {
  static instance: OkAnalytics;
  public static getInstance(): OkAnalytics {
    if (!OkAnalytics.instance) {
      OkAnalytics.instance = new OkAnalytics();
    }
    return OkAnalytics.instance;
  }
  private sendEvent(event: OkEvents) {
    const tmr = (window as any)._tmr || ((window as any)._tmr = []);
    if (tmr)
      tmr.push({
        type: "reachGoal",
        id: "3203019",
        goal: event,
      });
    else setTimeout(() => this.sendEvent(event), 1000);
  }

  innerTargetVisitAgents() {}
  innerTargetVisitBlog() {
    this.sendEvent(OkEvents.VisitBlog);
  }
  innerTargetVisitPartners() {}
  innerTargetVisitScience() {}
  innerTargetVisitTruck() {}
  innerTargetVisitWidgets() {}
  innerTargetRegister() {}
  innerTargetVisitCareer() {
    this.sendEvent(OkEvents.VisitCareer);
  }
  innerLandingRegistration() {
    this.sendEvent(OkEvents.LandingRegistration);
  }
  innerSubmitFormCpa(){}
}
export default OkAnalytics.getInstance();

import { AnalyticsIntegration } from "~/core/Analytics/IAnalyticsIntegration";

enum GtagEvents {
  LandingRegistration = "landing_registration",
  VisitWidgets = "visit_widgets",
  VisitBlog = "visit_blog",
  VisitCareer = "visit_career",
}
class GtagAnalytics extends AnalyticsIntegration {
  static instance: GtagAnalytics;
  public static getInstance(): GtagAnalytics {
    if (!GtagAnalytics.instance) {
      GtagAnalytics.instance = new GtagAnalytics();
    }
    return GtagAnalytics.instance;
  }

  sendEvent(event: GtagEvents) {
    const gtag = (window as any).gtag;
    if (gtag) gtag("event", event, { event_category: "visit_lending" });
    else setTimeout(() => this.sendEvent(event), 1000);
  }

  innerLandingRegistration() {
    this.sendEvent(GtagEvents.LandingRegistration);
  }

  innerTargetVisitAgents() {}

  innerTargetVisitBlog() {
    this.sendEvent(GtagEvents.VisitBlog);
  }

  innerTargetVisitCareer() {
    this.sendEvent(GtagEvents.VisitCareer);
  }

  innerTargetVisitPartners() {}

  innerTargetVisitScience() {}

  innerTargetVisitTruck() {}

  innerTargetVisitWidgets() {
    this.sendEvent(GtagEvents.VisitWidgets);
  }

  innerSubmitFormCpa(){}
}
export default GtagAnalytics.getInstance();

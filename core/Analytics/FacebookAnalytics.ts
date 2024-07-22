import { AnalyticsIntegration } from "~/core/Analytics/IAnalyticsIntegration";

enum FbEvents {
  LandingRegistration = "landing_registration",
  VisitWidgets = "visit_widgets",
  VisitBlog = "visit_blog",
  VisitCareer = "visit_career",
}

class FacebookAnalytics extends AnalyticsIntegration {
  static instance: FacebookAnalytics;
  public static getInstance(): FacebookAnalytics {
    if (!FacebookAnalytics.instance) {
      FacebookAnalytics.instance = new FacebookAnalytics();
    }
    return FacebookAnalytics.instance;
  }

  private sendEvent(event: FbEvents) {
    const fbq = (window as any).fbq;
    if (fbq) fbq("trackCustom", event);
    else setTimeout(() => this.sendEvent(event), 1000);
  }

  innerLandingRegistration() {
    this.sendEvent(FbEvents.LandingRegistration);
  }

  innerTargetVisitAgents() {}

  innerTargetVisitBlog() {
    this.sendEvent(FbEvents.VisitBlog);
  }

  innerTargetVisitCareer() {
    this.sendEvent(FbEvents.VisitCareer);
  }

  innerTargetVisitPartners() {}

  innerTargetVisitScience() {}

  innerTargetVisitTruck() {}

  innerTargetVisitWidgets() {
    this.sendEvent(FbEvents.VisitWidgets);
  }

  innerSubmitFormCpa(){}
}
export default FacebookAnalytics.getInstance();

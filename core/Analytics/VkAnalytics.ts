import { AnalyticsIntegration } from "~/core/Analytics/IAnalyticsIntegration";

enum VkEvents {
  VisitCareer = "visit_career",
  VisitAgents = "visit_agents",
  VisitWidjets = "visit_widjets",
  VisitPartners = "visit_partners",
  VisitBlog = "visit_blog",
}

class VkAnalytics extends AnalyticsIntegration {
  static instance: VkAnalytics;
  public static getInstance(): VkAnalytics {
    if (!VkAnalytics.instance) {
      VkAnalytics.instance = new VkAnalytics();
    }
    return VkAnalytics.instance;
  }
  sendEvent(event: VkEvents) {
    const vk = (window as any).VK;
    if (vk) vk.Goal(event);
    else setTimeout(() => this.sendEvent(event), 1000);
  }

  innerLandingRegistration() {}

  innerTargetVisitAgents() {
    this.sendEvent(VkEvents.VisitAgents);
  }

  innerTargetVisitBlog() {
    this.sendEvent(VkEvents.VisitBlog);
  }

  innerTargetVisitCareer() {
    this.sendEvent(VkEvents.VisitCareer);
  }

  innerTargetVisitPartners() {
    this.sendEvent(VkEvents.VisitPartners);
  }

  innerTargetVisitScience() {}

  innerTargetVisitTruck() {}

  innerTargetVisitWidgets() {
    this.sendEvent(VkEvents.VisitWidjets);
  }

  innerSubmitFormCpa(){}
}
export default VkAnalytics.getInstance();

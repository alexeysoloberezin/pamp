import YandexAnalytics from "~/core/Analytics/YandexAnalytics";
import GtagAnalytics from "~/core/Analytics/GtagAnalytics";
import FacebookAnalytics from "~/core/Analytics/FacebookAnalytics";
import OkAnalytics from "~/core/Analytics/OkAnalytics";
import VkAnalytics from "./VkAnalytics";
import { AnalyticsIntegration } from "./IAnalyticsIntegration";

class AnalyticsService {
  analytics: Array<AnalyticsIntegration> = [];
  private static instance: AnalyticsService;
  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }
  constructor() {
    this.analytics = [
      YandexAnalytics,
      GtagAnalytics,
      VkAnalytics,
      FacebookAnalytics,
      OkAnalytics,
    ];
  }
  private callAnalytics(name) {
    if (!this.analytics) return;
    this.analytics.forEach((a) => a[name]());
  }
  registration() {
    this.callAnalytics("innerLandingRegistration");
  }
  visitAgents() {
    this.callAnalytics("innerTargetVisitAgents");
  }
  visitPartners() {
    this.callAnalytics("innerTargetVisitPartners");
  }
  visitScience() {
    this.callAnalytics("innerTargetVisitScience");
  }
  visitTruck() {
    this.callAnalytics("innerTargetVisitTruck");
  }
  visitWidgets() {
    this.callAnalytics("innerTargetVisitWidgets");
  }
  visitBlog() {
    this.callAnalytics("innerTargetVisitBlog");
  }
  visitCareer() {
    this.callAnalytics("innerTargetVisitCareer");
  }
  sentCpaForm() {
    this.callAnalytics("innerSubmitFormCpa");
  }
}
export default AnalyticsService.getInstance();

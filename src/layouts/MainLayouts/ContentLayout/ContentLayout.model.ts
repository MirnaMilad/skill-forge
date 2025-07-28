export interface RouteActionConfig {
  buttonLabel: string;
  to: string;
}

export interface RouteMeta {
  title: string;
  action?: RouteActionConfig;
}

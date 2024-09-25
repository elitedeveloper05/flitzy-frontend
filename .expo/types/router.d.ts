/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/AddOnsScreen` | `/(tabs)/CartScreen` | `/(tabs)/GetStarted` | `/(tabs)/HomeScreen` | `/(tabs)/LocationRequestScreen` | `/(tabs)/NotificationsRequestScreen` | `/(tabs)/OTPRequestScreen` | `/(tabs)/OTPVerificationScreen` | `/(tabs)/OrderAcknowledgementScreen` | `/(tabs)/ServicesCatalogScreen` | `/(tabs)/explore` | `/AddOnsScreen` | `/CartScreen` | `/GetStarted` | `/HomeScreen` | `/LocationRequestScreen` | `/NotificationsRequestScreen` | `/OTPRequestScreen` | `/OTPVerificationScreen` | `/OrderAcknowledgementScreen` | `/ServicesCatalogScreen` | `/_sitemap` | `/explore`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

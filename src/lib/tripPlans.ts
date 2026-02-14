import type { TripPlanGroup, TripPlanItem } from "@/types/itinerary";

export function getTripPlanProps(plans: TripPlanItem[] | TripPlanGroup[] | undefined) {
  const a = plans ?? [];
  const first = a[0];
  const isGroups =
    a.length > 0 &&
    typeof first === "object" &&
    first !== null &&
    "section" in first &&
    "items" in first;
  return {
    groups: isGroups ? (a as TripPlanGroup[]) : undefined,
    items: !isGroups ? (a as TripPlanItem[]) : [],
  };
}

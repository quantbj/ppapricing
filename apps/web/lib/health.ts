export type HealthResponse = {
  status: string;
};

export function mapApiHealth(payload: unknown): HealthResponse {
  if (
    payload &&
    typeof payload === "object" &&
    "status" in payload &&
    typeof (payload as Record<string, unknown>).status === "string"
  ) {
    return { status: (payload as Record<string, string>).status };
  }

  throw new Error("Invalid health payload");
}

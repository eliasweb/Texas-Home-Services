import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#152A47",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 100 100" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 15 L58.2 38.7 L83.3 39.2 L63.3 54.3 L70.6 78.3 L50 64 L29.4 78.3 L36.7 54.3 L16.7 39.2 L41.8 38.7 Z"
            fill="#E1B546"
          />
        </svg>
      </div>
    ),
    size,
  );
}

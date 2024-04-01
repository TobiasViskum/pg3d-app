import { cn } from "@/lib/utils";

export function ViteIcon({ className }: { className?: string }) {
  return (
    <a href="https://vitejs.dev" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className, "h-8 w-8")}
        viewBox="0 0 410 404"
        fill="none"
      >
        <path
          d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6.00017"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="194.651"
            y1="8.81818"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEA83" />
            <stop offset="0.0833333" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

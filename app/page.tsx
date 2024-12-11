import Image from "next/image";

export default function Home() {
  const light = {
    /* Primary - Blues */
    "--color-primary-0": "230 241 249", // Lightest blue
    "--color-primary-50": "204 227 243", // Very light blue
    "--color-primary-100": "179 213 237", // Light blue
    "--color-primary-200": "153 199 231", // Soft blue
    "--color-primary-300": "128 185 225", // Medium light blue
    "--color-primary-400": "102 171 219", // Medium blue
    "--color-primary-500": "0 88 151", // True blue
    "--color-primary-600": "0 71 121", // Deep blue
    "--color-primary-700": "0 53 91", // Dark blue
    "--color-primary-800": "0 35 60", // Very dark blue
    "--color-primary-900": "0 18 30", // Nearly black blue
    "--color-primary-950": "0 9 15", // Darkest blue

    /* Secondary - Grays */
    "--color-secondary-0": "255 255 255", // Pure white
    "--color-secondary-50": "252 252 252", // Nearly white
    "--color-secondary-100": "250 250 250",
    "--color-secondary-200": "247 247 247",
    "--color-secondary-300": "244 244 244",
    "--color-secondary-400": "241 241 241",
    "--color-secondary-500": "238 238 238",
    "--color-secondary-600": "235 235 235",
    "--color-secondary-700": "231 231 231",
    "--color-secondary-800": "227 227 227",
    "--color-secondary-900": "224 224 224",
    "--color-secondary-950": "220 220 220",

    /* Tertiary - Light theme */
    "--color-tertiary-0": "255 255 255", // Pure white
    "--color-tertiary-50": "250 250 250", // Lightest gray
    "--color-tertiary-100": "245 245 245",
    "--color-tertiary-200": "229 229 229",
    "--color-tertiary-300": "212 212 212",
    "--color-tertiary-400": "163 163 163",
    "--color-tertiary-500": "115 115 115",
    "--color-tertiary-600": "82 82 82",
    "--color-tertiary-700": "64 64 64",
    "--color-tertiary-800": "38 38 38",
    "--color-tertiary-900": "23 23 23",
    "--color-tertiary-950": "0 0 0", // Pure black

    /* Error - Reds */
    "--color-error-0": "254 233 233", // Lightest red
    "--color-error-50": "254 226 226", // Very light red
    "--color-error-100": "254 202 202", // Light red
    "--color-error-200": "252 165 165", // Soft red
    "--color-error-300": "248 113 113", // Medium light red
    "--color-error-400": "239 68 68", // Medium red
    "--color-error-500": "230 53 53", // True red
    "--color-error-600": "220 38 38", // Deep red
    "--color-error-700": "185 28 28", // Dark red
    "--color-error-800": "153 27 27", // Very dark red
    "--color-error-900": "127 29 29", // Nearly black red
    "--color-error-950": "83 19 19", // Darkest red

    /* Success - Greens */
    "--color-success-0": "228 255 244", // Lightest green
    "--color-success-50": "202 255 232", // Very light green
    "--color-success-100": "162 241 192",
    "--color-success-200": "132 211 162",
    "--color-success-300": "102 181 132",
    "--color-success-400": "72 151 102",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "27 50 36",

    /* Warning - Oranges */
    "--color-warning-0": "255 253 251", // Lightest orange
    "--color-warning-50": "255 249 245", // Very light orange
    "--color-warning-100": "255 245 230",
    "--color-warning-200": "255 237 181",
    "--color-warning-300": "255 226 156",
    "--color-warning-400": "255 214 130",
    "--color-warning-500": "255 202 105",
    "--color-warning-600": "240 186 84",
    "--color-warning-700": "224 169 63",
    "--color-warning-800": "199 146 41",
    "--color-warning-900": "163 116 27",
    "--color-warning-950": "128 89 20",

    /* Info - Light Blues */
    "--color-info-0": "236 248 254", // Lightest info blue
    "--color-info-50": "199 235 252", // Very light info blue
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",

    /* Typography */
    "--color-typography-0": "254 254 255",
    "--color-typography-50": "245 245 245",
    "--color-typography-100": "229 229 229",
    "--color-typography-200": "219 219 220",
    "--color-typography-300": "212 212 212",
    "--color-typography-400": "163 163 163",
    "--color-typography-500": "140 140 140",
    "--color-typography-600": "115 115 115",
    "--color-typography-700": "82 82 82",
    "--color-typography-800": "64 64 64",
    "--color-typography-900": "38 38 39",
    "--color-typography-950": "38 38 39",

    /* Outline */
    "--color-outline-0": "253 254 254",
    "--color-outline-50": "243 243 243",
    "--color-outline-100": "230 230 230",
    "--color-outline-200": "221 220 219",
    "--color-outline-300": "211 211 211",
    "--color-outline-400": "165 163 163",
    "--color-outline-500": "140 141 141",
    "--color-outline-600": "115 116 116",
    "--color-outline-700": "83 82 82",
    "--color-outline-800": "65 65 65",
    "--color-outline-900": "39 38 36",
    "--color-outline-950": "26 23 23",

    /* Background */
    "--color-background-0": "255 255 255",
    "--color-background-50": "247 248 250",
    "--color-background-100": "242 243 245",
    "--color-background-200": "235 236 238",
    "--color-background-300": "228 229 231",
    "--color-background-400": "221 222 224",
    "--color-background-500": "214 215 217",
    "--color-background-600": "207 208 210",
    "--color-background-700": "200 201 203",
    "--color-background-800": "193 194 196",
    "--color-background-900": "186 187 189",
    "--color-background-950": "179 180 182",

    /* Background Special */
    "--color-background-error": "254 241 241", // Light error background
    "--color-background-warning": "255 244 235", // Light warning background
    "--color-background-success": "237 252 242", // Light success background
    "--color-background-muted": "247 248 247", // Light muted background
    "--color-background-info": "235 248 254", // Light info background

    /* Focus Ring Indicator */
    "--color-indicator-primary": "55 55 55", // Dark gray indicator
    "--color-indicator-info": "83 153 236", // Blue indicator
    "--color-indicator-error": "185 28 28", // Red indicator
  };

  return (
    <div className="p-8">
      {Object.entries(light).map(([key, value]) => {
        if (!key.startsWith("--color-")) return null;

        const colorName = key.replace("--color-", "");
        const rgbValue = value;
        const backgroundColor = `rgb(${rgbValue})`;

        // Convert RGB to Hex
        const rgbArray = rgbValue.split(" ").map(Number);
        const hexColor =
          "#" +
          rgbArray
            .map((x) => {
              const hex = x.toString(16);
              return hex.length === 1 ? "0" + hex : hex;
            })
            .join("");

        return (
          <div key={key} className="flex items-center gap-4 mb-2">
            <div
              className="w-16 h-16 rounded-md shadow-md"
              style={{ backgroundColor }}
            />
            <div>
              <p className="font-medium">{colorName}</p>
              <p className="text-sm text-gray-600">rgb({rgbValue})</p>
              <p className="text-sm text-gray-600">{hexColor}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

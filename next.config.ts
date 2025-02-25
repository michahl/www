import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withMDX({
  extension: /\.mdx?$/
})(nextConfig);

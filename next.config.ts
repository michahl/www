import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote']
  /* config options here */
};

export default withMDX({
  extension: /\.mdx?$/
})(nextConfig);

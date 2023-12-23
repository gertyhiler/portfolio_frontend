'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { type FC } from 'react';

interface Frontmatter {

}
export interface MDXProps {
  source: MDXRemoteSerializeResult<
  Record<string, unknown>,
  Frontmatter
>;
}

const MDX: FC<MDXProps> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MDX;;
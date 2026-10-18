import type { ComponentPropsWithoutRef } from 'react';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

export const TERMS_MDX_COMPONENTS: NonNullable<MDXRemoteProps['components']> = {
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc space-y-1 pl-5" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal space-y-1 pl-5" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a className="underline-offset-4 hover:underline" style={{ color: '#4d7c0f' }} {...props} />
  ),
};

import { redirect } from 'next/navigation';

export default async function AdminRedirectPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const baseUrl = (
    process.env.NEXT_PUBLIC_LARAVEL_ADMIN_URL || 'http://localhost:8000/admin'
  ).replace(/\/$/, '');
  const suffix = slug.length > 0 ? `/${slug.join('/')}` : '';
  redirect(`${baseUrl}${suffix}`);
}

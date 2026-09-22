import { notFound } from "next/navigation";
import { RecruitmentRolePage } from "@/features/recruitment/components/RecruitmentRolePage";
import {
  getRecruitmentRole,
  recruitmentRoles,
} from "@/features/recruitment/constants/roles";

export function generateStaticParams() {
  return recruitmentRoles.map((role) => ({ slug: role.slug }));
}

export default async function RecruitmentRoleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRecruitmentRole(slug);

  if (!role) {
    notFound();
  }

  return <RecruitmentRolePage role={role} />;
}

import GroupDetails from "@/Components/groups/GroupDetails";

const GroupPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg">
      <GroupDetails id={id} />
    </div>
  );
};

export default GroupPage;
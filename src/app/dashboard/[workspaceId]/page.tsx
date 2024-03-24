import React from "react";

export default function DynamicWorkspace({params}:{
  params: {workspaceId: string}
}) {
  console.log("params from the dynamic page", params);
  
  return <div>DynamicWorkspace</div>;
}

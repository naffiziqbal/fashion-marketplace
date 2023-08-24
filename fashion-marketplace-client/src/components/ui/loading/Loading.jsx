import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
      <div>
        <Skeleton variant="rectangular" width={410} height={318} />
        <Skeleton variant="text" width={410} height={318} />
      </div>
    );
};

export default Loading;

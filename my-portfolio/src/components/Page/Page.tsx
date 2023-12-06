import { useState } from "react";
import styles from "./Page.module.scss";
import NavBar from "../NavBar/NavBar";

interface PageProps {}

function Page() {
  const [pageId, setPageId] = useState<number>(1);

  return (
    <div>
      <NavBar numberOfPages={6} setPage={() => setPageId} />
    </div>
  );
}

export default Page;

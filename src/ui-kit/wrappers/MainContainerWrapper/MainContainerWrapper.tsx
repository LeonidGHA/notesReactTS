import { FC } from "react";

interface IMainContainerWrapperProps {
  children: React.ReactNode;
}

export const MainContainerWrapper: FC<IMainContainerWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

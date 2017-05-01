// flow

import { Colors, Metrics } from "../themes";

type Props = {
  children: any
};

export default ({ children }: Props) => (
  <main>
    {children}
    <style jsx global>{`
      main {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: calc(100vh - ${Metrics.tabbarHeight}px);
        background-color: ${Colors.background};
      }
    `}</style>
  </main>
);

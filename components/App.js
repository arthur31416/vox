// flow

import { Colors, Metrics } from "../themes";

type Props = {
  children: any
};

export default ({ children, hasTabbar = true }: Props) => (
  <main
    style={{
      minHeight: hasTabbar ? `calc(100% - ${Metrics.tabbarHeight}px)` : "100%"
    }}
  >
    {children}
    <style jsx global>{`
      body > div:first-child, #__next, #__next > div {
        height: 100%;
      }
      main {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: calc(100% - ${Metrics.tabbarHeight}px); 
        background-color: ${Colors.background};
      }
    `}</style>
  </main>
);

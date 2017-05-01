// flow

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
      }
    `}</style>
  </main>
);

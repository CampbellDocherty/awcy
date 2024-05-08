import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User';
import { auth } from '../../firebase/app';
import { FirebaseStorageContent } from '../../firebase/storage';
import { Fallback } from './Fallback';
import { FileUpload } from './FileUpload';
import { RaffleTicket } from './RaffleTicket';
import { SignIn } from './SignIn';
import { calculateHowManyColumns } from './columnCalculator/calculateHowManyColumns';
import { splitArray } from './columnCalculator/splitArray';
import { Column, Container, Main } from './styles/main.styles';
import { HeaderComponent } from './HeaderComponent';
import { GameWrapper } from '../Game';

const LazyContent = lazy(() => import('./LazyContent'));

export const Blog = ({ files }: { files: FirebaseStorageContent[] }) => {
  const [content, setContent] = useState<FirebaseStorageContent[][] | null>(
    null
  );
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  const [columns, setColumns] = useState(calculateHowManyColumns());

  useEffect(() => {
    const chunked = splitArray(files, columns);
    setContent(chunked);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newColumns = calculateHowManyColumns();
      setColumns(newColumns);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!content) {
      return;
    }

    const splitArrays = splitArray(content.flat(), columns);
    setContent(splitArrays);
  }, [columns]);

  const logOut = () => {
    setCount(0);
    auth.signOut();
  };

  if (count >= 10 && !user) {
    return <SignIn />;
  }

  const raffleNumber = localStorage.getItem('raffleNumber');

  return (
    <>
      {raffleNumber && <RaffleTicket raffleNumber={raffleNumber} />}
      <HeaderComponent onTitleClick={() => setCount(count + 1)} />
      {user && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FileUpload
            onUpload={(file: FirebaseStorageContent) => {
              if (!content) {
                setContent([[file]]);
                return;
              }
              const lastContent = content[content.length - 1];
              setContent([...content.slice(0, -1), [...lastContent, file]]);
            }}
          />
          <button onClick={logOut}>Log out</button>
        </div>
      )}
      <GameWrapper />
      <Container>
        <Main>
          {content &&
            content.map((list) => {
              return (
                <Column key={list[0].downloadUrl}>
                  {list.map((item: FirebaseStorageContent) => (
                    <Suspense key={item.downloadUrl} fallback={<Fallback />}>
                      <LazyContent
                        content={item}
                        onDelete={(file: FirebaseStorageContent) => {
                          const newContent = content.map((list) =>
                            list.filter((item) => item !== file)
                          );
                          setContent(newContent);
                        }}
                      />
                    </Suspense>
                  ))}
                </Column>
              );
            })}
        </Main>
      </Container>
    </>
  );
};
